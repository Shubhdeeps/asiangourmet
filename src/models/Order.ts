import { CartProduct } from "./CartProduct.model";
import { UserDetails } from "./UserDetails.model";

export type Order = UserDetails & {
  products: CartProduct[];
  status: "pending" | "accepted" | "delivered";
};
