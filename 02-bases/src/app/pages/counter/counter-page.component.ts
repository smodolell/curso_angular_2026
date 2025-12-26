import { Component } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl:'./counter-page.component.css'
})
export class CounterPageComponet {
  counter: number = 10;
  incrementBy(value: number) {
    this.counter += value;
    if (this.counter < 0) {
      this.counter = 0;
    }
  }
  reset() {
    this.counter = 10;
  }
}
