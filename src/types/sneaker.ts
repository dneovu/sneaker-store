export type Sneaker = {
  id: string;
  brand: string;
  model: string;
  description: string;
  imgSrc: string;
  price: number;
  sizes: Record<number, number>;
  promo?: boolean;
  isNew?: boolean;
  altImg?: string[];
};
