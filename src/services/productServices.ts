import { Product } from "./db.model";
import { indexDB, productStoreName } from "./indexedDB";

const dbName = "productsDB";

export const getDataBasedOnFilters = (
  filter: string,
  setData: React.Dispatch<React.SetStateAction<Product[]>>
) => {
  const request = indexDB.open(dbName, 1);

  request.onerror = (event) => {
    console.log(event);
  };

  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(productStoreName, "readwrite");
    const store = transaction.objectStore(productStoreName);

    const categoryQuery = store.index("p_category");
    const queryRes = categoryQuery.getAll([filter]);
    //close the db on complete
    queryRes.onsuccess = () => {
      const response = queryRes.result;
      setData(response);
    };
    transaction.oncomplete = () => db.close();
  };
  return;
};

export const getDataBasedOnCategoryAndProductName = (
  category: string,
  productName: string
) => {
  const request = indexDB.open(dbName, 1);
  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(productStoreName, "readonly");
    const store = transaction.objectStore(productStoreName);

    const categoryQuery = store.index("p_category_name");
    const queryRes = categoryQuery.getAll([category, productName]);
    return (queryRes.onsuccess = () => queryRes.result);
  };
};

export const searchProductBasedOnProductInitials = (keyword: string) => {
  console.log("searciginh.");

  const request = indexDB.open(dbName, 1);
  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(productStoreName, "readwrite");
    const store = transaction.objectStore(productStoreName);

    const categoryIndex = store.index("p_name");
    const range = IDBKeyRange.bound("\uffff" + keyword, keyword + "\uffff");
    const queryRes = categoryIndex.openCursor(range);
    queryRes.onsuccess = (e: any) => {
      const cursor = e.target.result;
      //   // console.log(e);
      //   // e.target.onsuccess((y: any) => {
      //   //   console.log("y", y);
      //   // });

      if (cursor) {
        console.log("cursor is:: ", JSON.stringify(cursor.value));

        cursor.continue();
      }
    };
  };
};
