import { Component,signal } from '@angular/core';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',

})
export class CharacterAdd {

  name = signal('Gohan');
  power = signal(100);

    addCharacter() {
    console.log('Name:', this.name());
    console.log('Power:', this.power());

    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }
    const newCharacter: Character = {
      // id: this.characters().length + 1,
      id:10,
      name: this.name(),
      power: this.power(),
    };

    console.log(newCharacter);
    // this.characters.update((list) => [...list, newCharacter]);

    this.resetField();
  }

  resetField(): void {
    this.name.set('');
    this.power.set(100);
  }
 }
