import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
};
@Injectable({ providedIn: 'root' })
export class DragonBallService {
  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  characters = signal<Character[]>(loadFromLocalStorage());
  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }
}
