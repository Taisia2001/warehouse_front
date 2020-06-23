export interface Product {
  id?: number;
  name: string;
  description: string;
  producer: string;
  amount: number;
  price: number;
  categoryName: string;
  category?: number;
}
