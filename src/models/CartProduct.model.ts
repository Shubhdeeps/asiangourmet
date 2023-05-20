import { Product } from "./Product.model";

export type CartProduct = Product & { count: number };
