import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponet {
  counter: number = 10;
  counterSingnal = signal(10);

  constructor() {
    setInterval(() => {
      this.counterSingnal.update((v) => {
        return v + 1;
      });
      console.log('Tick');
    }, 2000);
  }
  incrementBy(value: number) {
    this.counter += value;
    this.counterSingnal.update((current) => {
      return current + value;
    });
    if (this.counter < 0) {
      this.counter = 0;
    }
  }
  reset() {
    this.counter = 0;
    this.counterSingnal.set(0);
  }
}
