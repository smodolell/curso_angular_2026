import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 90000,
    },
    {
      id: 2,
      name: 'Pikoro',
      power: 80000,
    },
  ]);
}

export interface Character {
  id: number;
  name: string;
  power: number;
}
