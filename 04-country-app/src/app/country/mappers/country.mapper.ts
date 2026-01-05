import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-countries.interface';
export class CountryMapper {

  static toCountry(apiResponse: RESTCountry): Country {
    return {
      cca2: apiResponse.cca2,
      flag: apiResponse.flag,
      flagSvg: apiResponse.flags.svg,
      name: apiResponse.translations["spa"].common?? 'Nombre no disponible',
      capital: apiResponse.capital.join(', '),
      population: apiResponse.population,
      region:apiResponse.region,
      subRegion:apiResponse.subregion

    };
  }

  static toCountries(apiResponse: RESTCountry[]): Country[] {
    return apiResponse.map(this.toCountry);
  }
}
