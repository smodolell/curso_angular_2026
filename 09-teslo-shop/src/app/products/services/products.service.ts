import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductsResponce } from '@productos/interfaces/product-response.interface';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private http = inject(HttpClient);
  getProducts(): Observable<ProductsResponce> {
    return this.http
      .get<ProductsResponce>('http://localhost:3000/api/products')
      .pipe(tap((resp) => console.log(resp)));
  }
}
