import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.html',
})
export default class TrendingPage {
  gifService = inject(GifsService);

  scrollDivRef = viewChild<ElementRef>('divGroup');


  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    console.log('scroll event', scrollDiv);

  }
}
