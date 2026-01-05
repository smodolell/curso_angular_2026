import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {
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
}
