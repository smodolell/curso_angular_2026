import {  Component, signal } from '@angular/core';
import { CraracterList } from "../../components/dragonball/craracter-list/craracter-list";
import { Character } from '../../interfaces/character';

@Component({
  imports: [CraracterList],
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
