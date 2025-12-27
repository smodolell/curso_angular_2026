import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  name = signal('Gohan');
  power = signal(100);

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
    },
    {
      id: 3,
      name: 'Vegeta',
      power: 3000,
    },
    {
      id: 4,
      name: 'Yamcha',
      power: 500,
    },
  ]);
  addCharacter() {
    console.log('Name:', this.name());
    console.log('Power:', this.power());

    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    // this.characters().push(newCharacter);
    this.characters.update((list) => [...list, newCharacter]);

    this.resetField();
  }
  // powerClasses = computed(()=>{
  //   return {
  //     'text-danger':true
  //   }
  // });

  resetField(): void {
    this.name.set('');
    this.power.set(100);
  }
}

export interface Character {
  id: number;
  name: string;
  power: number;
}
