const indexDB =
  window.indexedDB ||
  (window as any).mozIndexedDB ||
  (window as any).webkitIndexedDB ||
  (window as any).msIndexedDB ||
  (window as any).shimIndexedDB;

const dbName = "cartDB";
const storeName = "cartItems";

function initCartItems() {
  const request = indexDB.open(dbName, 1);

  request.onerror = (event) => {
    console.log(event);
  };

  request.onupgradeneeded = () => {
    const db = request.result;
    const store = db.createObjectStore(storeName, { keyPath: "id" });

    //to make data searchale we need to create index for it
    store.createIndex("p_category", ["category"], { unique: false });
    store.createIndex("p_price", ["price"], { unique: false });
    store.createIndex("p_name", ["name"], { unique: false });
    store.createIndex("p_category_name", ["category", "name"], {
      unique: false,
    });
  };

  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(storeName, "readwrite");

    const store = transaction.objectStore(storeName);
    //save all the items to the database
  };
}
