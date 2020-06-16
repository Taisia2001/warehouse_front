export interface Product {
  id?: number;
  name: string;
  description: string;
  producer: string;
  amount: number;
  price: number;
  category?: string;
  categoryId?: number;
}
