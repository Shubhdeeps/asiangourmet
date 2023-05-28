import { CartProduct } from "../../models/CartProduct.model";
import { timestamp, firestore } from "../firebaseConfig";
import { v4 as uuidv4 } from "uuid";
import { getCurrUserProfile } from "./getCurrUserProfile";

export async function createNewOrder(order: CartProduct[]) {
  const currUserProfile = await getCurrUserProfile();
  const id = uuidv4();
  const seconds = timestamp.now().seconds;
  firestore
    .collection("orders")
    .doc(id)
    .set({
      ...currUserProfile,
      products: order,
      created: seconds,
      orderId: id,
    });

  firestore
    .collection("order_history")
    .doc(currUserProfile.uid)
    .set(
      {
        [seconds]: id,
      },
      { merge: true }
    );
  return;
}
