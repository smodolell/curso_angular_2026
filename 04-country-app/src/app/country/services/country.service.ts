import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    if (this.queryCacheCapital.has(query)) {
      return of(this.queryCacheCapital.get(query) ?? []);
    }
    // console.log('query:', query);
    // console.log('llegando al server:', query);

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((items) => CountryMapper.toCountries(items)),
      tap((countries) => this.queryCacheCapital.set(query, countries)),
      catchError((error) => {
        console.log('Error fetching', error);

        return throwError(() => new Error(`NO se pudo obtener paises con el ${query}`));
      })
    );
  }
  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    if (this.queryCacheCountry.has(query)) {
      return of(this.queryCacheCountry.get(query) ?? []);
    }
    // console.log('query:', query);
    // console.log('llegando al server:', query);

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`).pipe(
      map((items) => CountryMapper.toCountries(items)),
      tap((countries) => this.queryCacheCountry.set(query, countries)),
      catchError((error) => {
        console.log('Error fetching', error);

        return throwError(() => new Error(`NO se pudo obtener paises con el ${query}`));
      })
    );
  }

  searchByAlfaCode(code: string): Observable<Country | undefined> {
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`).pipe(
      map((items) => CountryMapper.toCountries(items)),
      map((countries) => countries.at(0)),
      catchError((error) => {
        console.log('Error fetching', error);

        return throwError(() => new Error(`NO se pudo obtener paises con el ${code}`));
      })
    );
  }
}
