import { Routes } from '@angular/router';
import { CounterPageComponet } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPage } from './pages/dragonball-page/dragonball-page';

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
    path:"**",
    redirectTo:""
  }
];
