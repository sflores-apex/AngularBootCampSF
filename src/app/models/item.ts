export interface Item {
  id: string;
  title: string;
  prices: {
    [tag: string]: number
  },
  photos: string[];
  description: string;
}
