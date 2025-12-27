import { Component, input, signal } from '@angular/core';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'dragonball-craracter-list',
  imports: [],
  templateUrl: './craracter-list.html',
})
export class CraracterList {
  listName = input.required<string>();
  characters = input.required<Character[]>();
}
