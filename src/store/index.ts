import { signal } from "@preact/signals-react";
import { CartProduct } from "../models/CartProduct.model";

// export const cartItems = signal<CartProduct>({});
export const cartProducts = signal<CartProduct[]>([]);
