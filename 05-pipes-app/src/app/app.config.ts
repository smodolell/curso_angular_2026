import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { registerInjectable } from '@angular/core/primitives/di';
import { registerLocaleData } from '@angular/common';

import localEs from '@angular/common/locales/es-MX'
import localFr from '@angular/common/locales/fr'

registerLocaleData(localEs,'es');
registerLocaleData(localFr,'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide:LOCALE_ID,
      useValue:'es'
    }
  ]
};
