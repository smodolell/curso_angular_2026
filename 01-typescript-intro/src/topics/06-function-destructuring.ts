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

function taxCalculatior(options: TaxCalculatorOption): [number, number] {
  let total: number = 0;
  const { tax, products } = options;
  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax: number = 0.15;

const [total, totalTax] = taxCalculatior({
  tax: tax,
  products: shoppingCart,
});
console.log("Total", total);
console.log("Tax", totalTax);

export {};
