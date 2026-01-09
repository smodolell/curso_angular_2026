import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../interfaces/product-response.interface';
import { environment } from 'src/environments/environment.development';
import { SlicePipe } from '@angular/common';
import { ProductImagePipe } from '@productos/pipes/product-image.pipe';

const baseUrl = environment.baseUrl;

@Component({
  selector: 'product-card',
  imports: [ProductImagePipe,RouterLink,SlicePipe],
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>({});

  imageUrl = computed(() => {
    return `${baseUrl}/files/product/${this.product().images[0]}`;
  });
}
