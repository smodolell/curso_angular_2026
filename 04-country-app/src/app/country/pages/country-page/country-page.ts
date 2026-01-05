import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/country.interface';
import { of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { NotFound } from "../../../shared/components/not-found/not-found";
import { CountryInformation } from "./country-information/country-information";

@Component({
  selector: 'app-country-page',
  imports: [NotFound, CountryInformation],
  templateUrl: './country-page.html',
})
export class CountryPage {
  countryService = inject(CountryService);
  countryCode = inject(ActivatedRoute).snapshot.paramMap.get('code');

  countryResource = rxResource<Country | undefined, { code: string }>({
    params: () => ({ code: this.countryCode ?? '' }),
    stream: ({ params }) => {
      if (!params.code) return of();
      return this.countryService.searchByAlfaCode(params.code);
    },
  });

  // countryResource = rxResource<Country[], { query: string }>({
  //   params: () => ({ query: this.query() }),
  //   stream: ({ params }) => {
  //     if (!params.query) return of([]);
  //     return this.countryService.searchByCountry(params.query);
  //   },
  // });
}
