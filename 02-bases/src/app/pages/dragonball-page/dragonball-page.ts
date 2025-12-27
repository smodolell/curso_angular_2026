import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
    {
      id: 2,
      name: 'Pikoro',
      power: 8000,
    },{
      id: 3,
      name: 'Vegeta',
      power: 3000
    },
    {
      id: 4,
      name: 'Yamcha',
      power: 500
    }
  ]);

  // powerClasses = computed(()=>{
  //   return {
  //     'text-danger':true
  //   }
  // });
}

export interface Character {
  id: number;
  name: string;
  power: number;
}
