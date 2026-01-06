import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroColor',
})
export class HeroColorPipe implements PipeTransform {
 private colorText: Record<Color, string> = {
    [Color.red]: 'Rojo',
    [Color.black]: 'Negro',
    [Color.blue]: 'Azul',
    [Color.green]: 'Verde',
  };
  transform(value: Color): string {
    return this.colorText[value];
  }
}
