import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name = signal('Gohan');
  power = signal(100);

  newCharacter = output<Character>();

  addCharacter() {
    console.log('Name:', this.name());
    console.log('Power:', this.power());

    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }
    const result: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };
    this.newCharacter.emit(result);

    console.log(result);
    // this.characters.update((list) => [...list, newCharacter]);

    this.resetField();
  }

  resetField(): void {
    this.name.set('');
    this.power.set(100);
  }
}
