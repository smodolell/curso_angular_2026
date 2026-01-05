import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInput } from '../../components/country-search-input/country-search-input';
import { CountryList } from '../../components/country-list/country-list';
import { CountryService } from '../../services/country.service';
// import { RESTCountry } from '../../interfaces/rest-countries.interface';
// import { Country } from '../../interfaces/country.interface';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { Country } from '../../interfaces/country.interface';
// import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {
  countryService = inject(CountryService);
  query = signal<string>('');


  countryResource = rxResource<Country[],{query:string}>({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);

      return this.countryService.searchByCapital(params.query);
    },
  });

  // countryResource = resource({
  //   params: () => ({ query: this.query() }),
  //   loader: async ({ params }) => {
  //     if (!params.query) return [];

  //     return await firstValueFrom(this.countryService.searchByCapital(params.query));
  //   },
  // });

  // isLoading = signal(false);
  // isError = signal<string | null>(null);

  // countries = signal<Country[]>([]);
  // // onSearch(query?: string): void {
  // //   if (this.isLoading()) return;
  // //   this.isLoading.set(true);
  // //   this.isError.set(null);
  // //   this.countries.set([]);

  // //   console.log({ term: query });
  // //   this.countryService.searchByCapital(query || '')
  // //   .subscribe((countries) => {
  // //     this.isLoading.set(false);
  // //     if (countries.length === 0) {
  // //       this.isError.set(`No countries found with capital "${query}"`);
  // //       return;
  // //     }
  // //     this.countries.set(countries);
  // //     console.log(countries);
  // //   });

  // onSearch(query?: string): void {
  //   if (this.isLoading()) return;
  //   this.isLoading.set(true);
  //   this.isError.set(null);
  //   this.countries.set([]);

  //   this.countryService.searchByCapital(query || '').subscribe({
  //     next: (countries) => {
  //       this.isLoading.set(false);
  //       this.countries.set(countries);
  //     },
  //     error: (error) => {
  //       this.isLoading.set(false);
  //       this.isError.set(error);
  //       this.countries.set([]);
  //     },
  //   });
  // }
}
