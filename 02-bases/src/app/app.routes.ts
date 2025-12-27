import { Routes } from '@angular/router';
import { CounterPageComponet } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPage } from './pages/dragonball/dragonball-page';
import { DragonballSuperPage } from './pages/dragonball-super/dragonball-super-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponet,
  },
  {
    path:"hero",
    component: HeroPageComponent
  },
  {
    path:"dragonball",
    component: DragonballPage
  },
  {
    path:"dragonball-super",
    component: DragonballSuperPage
  },
  {
    path:"**",
    redirectTo:""
  }
];
