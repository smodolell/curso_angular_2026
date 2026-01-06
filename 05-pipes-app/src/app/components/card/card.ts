import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
})
export class Card {
  title = input.required<string>();
}
