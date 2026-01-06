import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,CanFlyPipe,HeroColorPipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
  name = signal<string>('Sergio');
  upperCase = signal<boolean>(false);

  heroes = signal(heroes);


  changeUpperCase() {
    if (this.upperCase()) {
      this.upperCase.set(false);
    } else {
      this.upperCase.set(true);
    }
  }
}
