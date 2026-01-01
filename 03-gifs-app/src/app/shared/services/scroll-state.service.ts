import { Injectable, signal } from '@angular/core';
import TrendingPage from '../../gifs/pages/trending-page/trending-page';

@Injectable({ providedIn: 'root' })
export class ScrollStateService {
  trendingScrollState = signal<number>(0);
}
