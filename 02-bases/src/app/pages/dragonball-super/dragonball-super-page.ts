import {  Component, signal } from '@angular/core';
import { Character } from '../dragonball/dragonball-page';

@Component({
  imports: [],
  templateUrl:"./dragonball-super-page.html"
})
export class DragonballSuperPage {

  name = signal('Gohan');
  power = signal(100);

 characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    }
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

    this.characters.update((list) => [...list, newCharacter]);

    this.resetField();
  }

  resetField(): void {
    this.name.set('');
    this.power.set(100);
  }
}
