import { CartProduct } from "../models/CartProduct.model";
import { Product } from "../models/Product.model";
// import { addItemsToCart, removeItemFromCart } from "../services/cartServices";
import { cartProducts } from "../store";

export function addProductToCart(product: Product, action: "ADD" | "REMOVE") {
  const { id } = product;
  let updatedProduct: CartProduct | null = null;
  const _cartProducts = cartProducts.value;
  // isolate the current Item
  const _previousCartItem = _cartProducts.find((item) => item.id === id);
  const _indexOfPreviousCartItem = _cartProducts.findIndex(
    (item) => item.id === id
  );
  // remove the item from the array
  const newCartProductArray = _cartProducts.filter((item) => item.id !== id);
  if (action === "ADD") {
    if (_previousCartItem) {
      const newItem: CartProduct = {
        ..._previousCartItem,
        count: _previousCartItem.count + 1,
      };
      updatedProduct = newItem;
      newCartProductArray.splice(_indexOfPreviousCartItem, 0, newItem);
      cartProducts.value = newCartProductArray;
    } else {
      const newItem: CartProduct = {
        ...product,
        count: 1,
      };
      updatedProduct = newItem;

      newCartProductArray.splice(_indexOfPreviousCartItem, 0, newItem);
      cartProducts.value = newCartProductArray;
    }
  } else {
    if (_previousCartItem) {
      const newCount = _previousCartItem.count - 1;
      //if count is still over zero then add the product back to list
      if (newCount > 0) {
        const newItem: CartProduct = {
          ..._previousCartItem,
          count: newCount,
        };
        updatedProduct = newItem;

        newCartProductArray.splice(_indexOfPreviousCartItem, 0, newItem);
        cartProducts.value = newCartProductArray;
      } else {
        cartProducts.value = newCartProductArray;
      }
    }
  }
  // removeItemFromCart(id);

  if (updatedProduct) {
    // addItemsToCart(updatedProduct);
  }
}
