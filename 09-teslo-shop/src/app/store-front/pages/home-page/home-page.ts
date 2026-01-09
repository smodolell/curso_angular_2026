import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCard } from '@productos/components/product-card/product-card';
import { ProductsResponce } from '@productos/interfaces/product-response.interface';
import { ProductsService } from '@productos/services/products.service';

@Component({
  selector: 'app-home-page',
  imports: [ProductCard],
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
