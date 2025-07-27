// TODO: change types

export type Sneaker = {
  id: string;
  brand: string;
  model: string;
  description: string;
  imgSrc: string;
  price: number;
  sizes: Record<number, number>;
  isPromo?: boolean;
  isNew?: boolean;
};
