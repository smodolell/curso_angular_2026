import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service';
import { GifList } from "../../components/gif-list/gif-list";

@Component({
  selector: 'gifs-history-page',
  imports: [GifList],
  templateUrl: './gifs-history-page.html',
})
export default class GifsHistoryPage {
  gigsService = inject(GifsService);
  query = toSignal(inject(ActivatedRoute).params.pipe(map((params) => params['query'] ?? '')));
  gifsByKey = computed(() => this.gigsService.getHistoryGifs(this.query() ?? ''));
}
