import { Injectable, signal } from '@angular/core';

export type AvailableLocale = 'es' | 'fr' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  private currentLocal = signal<AvailableLocale>('es');
  constructor() {
    this.currentLocal.set((localStorage.getItem('locale') as AvailableLocale) ?? 'es');
  }

  get GetLocale() {
    return this.currentLocal();
  }

  changeLocale(locale: AvailableLocale) {
    localStorage.setItem('locale', locale);
    this.currentLocal.set(locale);
    window.location.reload();
  }
}
