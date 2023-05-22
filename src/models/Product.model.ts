export interface Product {
  name: string;
  quantityType: string;
  id: string;
  category: string;
  price: number;
  quantity: number;
  imageURL: string;
  discount?: number;
}
