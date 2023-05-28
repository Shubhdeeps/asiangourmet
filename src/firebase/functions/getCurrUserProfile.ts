import { UserDetailsDB } from "../../models/UserDetails.model";
import { auth, firestore } from "../firebaseConfig";

const localStorageKey = "asiangourmet-user-profile";

export async function getCurrUserProfile() {
  const userProfileFromStorage = localStorage.getItem(localStorageKey);
  if (!userProfileFromStorage) {
    return await updateUserProfileToLocalStorage();
  }
  return JSON.parse(userProfileFromStorage) as UserDetailsDB;
}

async function updateUserProfileToLocalStorage() {
  const currUserId = auth.currentUser?.uid;
  const user = (
    await firestore.collection("users").doc(currUserId).get()
  ).data() as UserDetailsDB;
  if (!user) {
    throw new Error("ERROR, USER NOT FOUND!");
  }
  localStorage.setItem(localStorageKey, JSON.stringify(user));
  return user;
}
