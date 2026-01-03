import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-countries.interface';
export class CountryMapper {
  static toCountry(apiResponse: RESTCountry): Country {
    return {
      cca2: apiResponse.cca2,
      flag: apiResponse.flags.png,
      flagSvg: apiResponse.flags.svg,
      name: apiResponse.name.common,
      capital: apiResponse.capital ? apiResponse.capital[0] : 'N/A',
      population: apiResponse.population.toLocaleString(),
    };
  }

  static toCountries(apiResponse: RESTCountry[]): Country[] {
    return apiResponse.map(this.toCountry);
  }
}
