import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
})
export class CountrySearchInput {
  placeholder = input<string>('Buscar...');
  debounceTime = input(300);
  initialValue = input<string>();
  value = output<string>();

  inputValue = linkedSignal<string>(() => this.initialValue() ?? '');

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();
    const timeOut = setTimeout(() => {
      this.value.emit(value);
    }, this.debounceTime());
    onCleanup(() => {
      clearTimeout(timeOut);
    });
  });
}
