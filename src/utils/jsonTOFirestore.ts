// import data from "../assets/data.json";
// import { firestore } from "../firebase/firebaseConfig";
// import { Product } from "../models/Product.model";

// export function jsonTOFirestore() {
//   const sendData: {
//     [id: string]: Product;
//   } = {};
//   for (const category of Object.values(data)) {
//     for (const item of category) {
//       sendData[item.id] = item;
//     }
//   }
//   console.log(sendData);
//   firestore.collection("products").doc("allProducts").set(sendData);
//   console.log("Success");
// }
