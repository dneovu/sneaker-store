export type Brand = {
  id: string;
  name: string;
};

export type Size = {
  id: string;
  value: number;
};

export type PriceRange = {
  id?: string;
  min: number;
  max: number;
};

// export type MetaSneakers = {
//   id: string;
//   brands: Brand[];
//   sizes: Size[];
//   price: Price;
// };
