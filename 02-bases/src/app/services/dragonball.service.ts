import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character';

@Injectable({ providedIn: 'root' })
export class DragonBallService {
  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

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
