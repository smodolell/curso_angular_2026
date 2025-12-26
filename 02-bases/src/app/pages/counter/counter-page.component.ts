import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Counter:{{ counter }}</h1>
    <button (click)="incrementBy(1)">Incrementar Valor</button>
  `,
})
export class CounterPageComponet {
  counter: number = 10;
  incrementBy(value: number) {
    this.counter += value;
  }
}
