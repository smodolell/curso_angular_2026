import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'gifs-history-page',
  imports: [],
  templateUrl: './gifs-history-page.html',
})
export default class GifsHistoryPage {
    query = toSignal(inject(ActivatedRoute).params.pipe(map((params) => params['query'] ?? '')));
}

