import { Data } from "../../services/db.model";
import { initDBwithData } from "../../services/indexedDB";
import { firestore } from "../firebaseConfig";

export async function getProductsAndUpdateToDb() {
  //fetch fresh data
  const productDocs = await firestore
    .collection("products")
    .doc("allProducts")
    .get();
  const products = productDocs.data() as Data;

  // update db with data
  initDBwithData(products);
  console.log("success");
}
