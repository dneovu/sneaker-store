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
