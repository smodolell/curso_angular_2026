import { Routes } from '@angular/router';
import { BasicPage } from '../reactive/pages/basic-page/basic-page';
import { DynamicPage } from '../reactive/pages/dynamic-page/dynamic-page';
import { SwitchesPage } from '../reactive/pages/switches-page/switches-page';

export const countryRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Básicos',
        component: BasicPage,
      },
      {
        path: 'dynamic',
        title: 'Dinamicos',
        component: DynamicPage,
      },
      {
        path: 'switches',
        title: 'Switches',
        component: SwitchesPage,
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];
