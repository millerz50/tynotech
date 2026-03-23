//product types
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "laptop" | "phone" | "accessory";
  description?: string;
}
//laptop aditional specs
export interface LaptopSpecs {
  brand: string;
  model: string;
  processor: string;
  ram: string;
  storage: string;
  gpu?: string;
  display: string;
  battery: string;
  os: string;
}

export interface LaptopProduct extends Product {
  category: "laptop";
  specs: LaptopSpecs;
}

export type StoreProduct = LaptopProduct | Product;

export interface Ad {
  id: string;
  title: string;
  image: string;
  link: string;
  type: "perfume" | "electronics";
}
