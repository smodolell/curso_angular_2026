import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.html',
})
export default class TrendingPage {
  gifService = inject(GifsService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('divGroup');

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;
    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;
    const IsAtButton = scrollTop + clientHeight +300 >= scrollHeight;

    if(IsAtButton){


    }
    console.log('IsAtButton', IsAtButton);

  }
}
