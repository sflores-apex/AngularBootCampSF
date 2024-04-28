export type Price = number;

export type Prices = {
  [tag: string]: Price
}

export type Photo = string;

export interface Item {
  id?: string;
  title: string;
  prices: Prices,
  photos: Photo[];
  description: string;
  offerDiscount?: number;
}
