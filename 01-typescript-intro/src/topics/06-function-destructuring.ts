interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150,
};

const tablet: Product = {
  description: "ipad Air",
  price: 250,
};
interface TaxCalculatorOption {
  tax: number;
  products: Product[];
}

function taxCalculatior(options: TaxCalculatorOption): number[] {
  let total: number = 0;

  options.products.forEach((product) => {
    total += product.price;
  });

  return [total, total * options.tax];
}

const shoppingCart = [phone, tablet];
const tax: number = 0.15;

const result = taxCalculatior({
  tax: tax,
  products: shoppingCart
});
console.log("Total",result[0]);
console.log("Tax",result[1]);

export {};
