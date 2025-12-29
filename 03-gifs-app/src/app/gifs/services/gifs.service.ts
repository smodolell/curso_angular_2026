import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@enviroments/environment.development';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, pipe, tap, Observable } from 'rxjs';

const GIF_STORAGE_KEY = 'gifs';

const loadFromLocalStorage = (): Record<string, Gif[]> => {
  const data = localStorage.getItem(GIF_STORAGE_KEY);
  return data ? JSON.parse(data) : {};
};

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal<boolean>(true);
  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));
  saveGiftToLocalStorage = effect(() => {
    localStorage.setItem(GIF_STORAGE_KEY, JSON.stringify(this.searchHistory()));
  });

  trendingGifGroup = computed<Gif[][]>(() => {
    const groups = [];
    for (let i = 0; i < this.trendingGifs().length; i += 3) {
      groups.push(this.trendingGifs().slice(i, i + 3));
    }
    console.log('Grouped Trending GIFs:', groups);
    return groups;
  });

  constructor() {
    this.loadTrendingGifs();
    console.log('GifsService initialized');
  }

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.gifpyApiUrl}/gifs/trending`, {
        params: {
          api_key: environment.gifpyApiKey,
          limit: '20',
        },
      })
      .subscribe((response) => {
        const gifs = GifMapper.mapGiphyItemsToGifs(response.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log(gifs);
      });
  }

  searchGifs(query: string): Observable<Gif[]> {
    return this.http
      .get<GiphyResponse>(`${environment.gifpyApiUrl}/gifs/search`, {
        params: {
          api_key: environment.gifpyApiKey,
          limit: '20',
          q: query,
        },
      })
      .pipe(
        map(({ data }) => data),
        map((items) => GifMapper.mapGiphyItemsToGifs(items)),

        tap((items) => {
          this.searchHistory.update((history) => ({
            ...history,
            [query.toLowerCase()]: items,
          }));
        })
      );
  }
  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query.toLowerCase()] || [];
  }
}
