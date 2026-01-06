import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocalService } from '../../services/LocalService';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {
  localeService = inject(LocalService);
  currentLocal = signal(inject(LOCALE_ID));

  nameLower = signal('sergio');
  nameUpper = signal('SERGIO');
  fullName = signal('SERGiO MoDoleLL');
  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const inteval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick');
    }, 1000);
    onCleanup: () => {
      clearInterval(inteval);
    };
  });

  changeLocale(locale: AvailableLocale) {
    console.log(locale);
    this.localeService.changeLocale(locale);
  }
}
