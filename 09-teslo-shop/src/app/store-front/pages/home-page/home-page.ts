import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCard } from '@products/components/product-card/product-card';
import { ProductsResponce } from '@products/interfaces/product-response.interface';
import { ProductsService } from '@products/services/products.service';
import { Pagination } from "@shared/components/pagination/pagination";

@Component({
  selector: 'app-home-page',
  imports: [ProductCard, Pagination],
  templateUrl: './home-page.html',
})
export class HomePage {
  private productsService = inject(ProductsService);

  productsResource = rxResource<ProductsResponce, {}>({
    params: () => ({}),
    stream: ({ params }) => {
      return this.productsService.getProducts({});
    },
  });
}
