import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@enviroments/environment.development';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
trendingGifsLoading = signal<boolean>(true)

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
}
