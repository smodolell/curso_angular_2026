import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  imports:[UpperCasePipe]
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);
  heroDescription = computed(() => {
    const desctiption = `${this.name()} - ${this.age()}`;
    return desctiption;
  });

  capitalizarName = computed(() => {
    return this.name().toUpperCase();
  });
  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }
  changeAge() {
    this.age.set(60);
  }
  resetForm(): void {
    this.name.set('Iroman');
    this.age.set(45);
  }
}
