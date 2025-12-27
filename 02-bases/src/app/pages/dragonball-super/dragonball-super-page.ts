import { Component, signal } from '@angular/core';
import { CraracterList } from '../../components/dragonball/craracter-list/craracter-list';
import { Character } from '../../interfaces/character';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';

@Component({
  imports: [CraracterList, CharacterAdd],
  templateUrl: './dragonball-super-page.html',
})
export class DragonballSuperPage {
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
  ]);
  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }
}
