import { initCartItems } from "./cartServices";
import { Data } from "./db.model";

export const indexDB =
  window.indexedDB ||
  (window as any).mozIndexedDB ||
  (window as any).webkitIndexedDB ||
  (window as any).msIndexedDB ||
  (window as any).shimIndexedDB;

const dbName = "productsDB";
export const productStoreName = "products";

export function initDB() {
  const request = indexDB.open(dbName, 1);

  request.onerror = (event) => {
    console.log(event);
  };

  request.onupgradeneeded = () => {
    const db = request.result;
    const store = db.createObjectStore(productStoreName, { keyPath: "id" });

    //to make data searchale we need to create index for it
    store.createIndex("p_category", ["category"], { unique: false });
    store.createIndex("p_price", ["price"], { unique: false });
    store.createIndex("p_name", ["name"], { unique: false });
    store.createIndex("p_category_name", ["category", "name"], {
      unique: false,
    });
  };
  //initiate cart db
  initCartItems();
}

export function initDBwithData(data: Data) {
  const request = indexDB.open(dbName, 1);

  request.onerror = (event) => {
    console.log(event);
  };

  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(productStoreName, "readwrite");
    const store = transaction.objectStore(productStoreName);
    //save all the items to the database
    for (const item of Object.values(data)) {
      store.put(item);
    }
  };
}
