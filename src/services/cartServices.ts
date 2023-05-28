import { CartProduct } from "../models/CartProduct.model";
import { cartProducts } from "../store";

const indexDB =
  window.indexedDB ||
  (window as any).mozIndexedDB ||
  (window as any).webkitIndexedDB ||
  (window as any).msIndexedDB ||
  (window as any).shimIndexedDB;

const dbName = "cartDB";
const storeName = "cartItems";

export function initCartItems() {
  const request = indexDB.open(dbName, 1);

  request.onerror = (event) => {
    console.log(event);
  };

  request.onupgradeneeded = () => {
    const db = request.result;
    db.createObjectStore(storeName, { keyPath: "id" });
  };
}

export function removeItemFromCart(itemId: string) {
  const request = indexDB.open(dbName, 1);
  request.onerror = function () {
    console.error("Error opening IndexedDB database");
  };

  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(storeName, "readwrite");
    const store = transaction.objectStore(storeName);

    store.delete(itemId);
  };
}

export function emptyCart() {
  const request = indexDB.open(dbName, 1);
  request.onerror = function () {
    console.error("Error opening IndexedDB database");
  };

  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(storeName, "readwrite");
    const store = transaction.objectStore(storeName);

    store.clear();
  };
}

export function addItemsToCart(item: CartProduct) {
  const request = indexDB.open(dbName, 1);
  request.onerror = function () {
    console.error("Error opening IndexedDB database");
  };

  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(storeName, "readwrite");
    const store = transaction.objectStore(storeName);
    store.put(item);
  };
}

// only run it in the start
export function getCartItems() {
  const request = indexDB.open(dbName, 1);
  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(storeName, "readonly");
    const store = transaction.objectStore(storeName);

    const queryRes = store.getAll();
    queryRes.onsuccess = () => {
      const res = queryRes.result as CartProduct[];
      cartProducts.value = res;
    };
  };
}
