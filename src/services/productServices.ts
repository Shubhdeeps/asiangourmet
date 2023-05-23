import { Product } from "../models/Product.model";
import { dbName, indexDB, productStoreName } from "./indexedDB";

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

      if (response.length === 0) {
        // fetch data from firestore and update to db
      }
      setData(response);
    };
    transaction.oncomplete = () => db.close();
  };
  return;
};

export const getAllPopularProducts = (
  setData: React.Dispatch<React.SetStateAction<Product[] | null>>
) => {
  const request = indexDB.open(dbName, 1);

  request.onerror = (event) => {
    console.log(event);
  };

  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(productStoreName, "readwrite");
    const store = transaction.objectStore(productStoreName);

    const categoryQuery = store.index("p_popular");
    const queryRes = categoryQuery.getAll();
    //close the db on complete
    queryRes.onsuccess = () => {
      const response = queryRes.result;

      if (response.length === 0) {
        // fetch data from firestore and update to db
      }
      setData(response);
    };
    transaction.oncomplete = () => db.close();
  };
  return;
};

export const getProductBasedOnName = (
  name: string,
  setData: (product: Product) => void
) => {
  const request = indexDB.open(dbName, 1);

  request.onerror = (event) => {
    console.log(event);
  };

  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(productStoreName, "readwrite");
    const store = transaction.objectStore(productStoreName);

    const categoryQuery = store.index("p_name");
    const queryRes = categoryQuery.get([name]);
    //close the db on complete
    queryRes.onsuccess = () => {
      const response = queryRes.result;
      setData(response);
    };
    transaction.oncomplete = () => db.close();
  };
  return;
};

export const getAllProductsInDB = (
  setData: React.Dispatch<React.SetStateAction<Product[]>>
) => {
  const request = indexDB.open(dbName, 1);
  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(productStoreName, "readonly");
    const store = transaction.objectStore(productStoreName);

    const queryRes = store.getAll();
    queryRes.onsuccess = () => {
      const response = queryRes.result as Product[];
      setData(response);
    };
    transaction.oncomplete = () => db.close();
    return;
  };
};

// export const getDataBasedOnCategoryAndProductName = (
//   category: string,
//   productName: string
// ) => {
//   const request = indexDB.open(dbName, 1);
//   request.onsuccess = () => {
//     const db = request.result;
//     const transaction = db.transaction(productStoreName, "readonly");
//     const store = transaction.objectStore(productStoreName);

//     const categoryQuery = store.index("p_category_name");
//     const queryRes = categoryQuery.getAll([category, productName]);
//     return (queryRes.onsuccess = () => queryRes.result);
//   };
// };

// export const searchProductBasedOnProductInitials = (keyword: string) => {
//   const request = indexDB.open(dbName, 1);
//   request.onerror = (event: any) => {
//     console.error("Error opening database:", event.target.error);
//   };
//   request.onsuccess = () => {
//     const db = request.result;
//     const transaction = db.transaction([productStoreName], "readonly");
//     transaction.onerror = (event: any) => {
//       console.error("Transaction error:", event.target.error);
//     };
//     const store = transaction.objectStore(productStoreName);

//     const categoryIndex = store.index("p_name");
//     // console.log("Keyword:", keyword);
//     // const range = IDBKeyRange.bound(keyword, keyword + "\uffff", true, true);

//     const queryRes = categoryIndex.openCursor();
//     queryRes.onerror = (event: any) => {
//       console.error("Query error:", event.target.error);
//     };
//     queryRes.onsuccess = (e: any) => {
//       const cursor = e.target.result;

//       if (
//         cursor &&
//         cursor.value.name.toLowerCase().includes(keyword.toLowerCase())
//       ) {
//         console.log(cursor.value);
//         cursor.continue();
//       }
//     };
//   };
// };
