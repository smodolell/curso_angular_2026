import {  Component } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.html'
})
export class CountrySearchInput {


  onSearch(term?: string): void {
    console.log({ term });
  }

}
