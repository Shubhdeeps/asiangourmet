import { UserDetails } from "../../models/UserDetails.model";
import { auth, firestore, provider } from "../firebaseConfig";

export function createNewUser(userDetails: UserDetails) {
  try {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;

      if (user) {
        firestore
          .collection("users")
          .doc(user.uid)
          .set({
            ...userDetails,
            email: user.email,
            uid: user.uid,
            phoneNumber: user.phoneNumber,
          });
      }
    });
  } catch (e: any) {
    console.log(e.message);
  }
}
