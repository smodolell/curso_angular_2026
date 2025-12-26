import { Routes } from '@angular/router';
import { CounterPageComponet } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/counter/hero/hero-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponet,
  },
  {
    path:"hero",
    component: HeroPageComponent

  }
];
