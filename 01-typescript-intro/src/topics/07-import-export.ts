import type { Product } from "./06-function-destructuring";
import {  taxCalculatior } from "./06-function-destructuring";

const shopintCart: Product[] = [
  {
    description: "Nokia",
    price: 100,
  },
  {
    description: "iPad",
    price: 1250,
  },
];

const [total, tax] = taxCalculatior({
  tax: 10,
  products: shopintCart,
});

console.log("Total:", total);
console.log("Tax:", tax);
