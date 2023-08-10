import { UserDetailsDB } from "../../models/UserDetails.model";
import { auth, firestore, timestamp } from "../firebaseConfig";

const localStorageKey = "asiangourmet-user-profile";

export async function updateUserDetails(user: UserDetailsDB) {
  localStorage.setItem(localStorageKey, JSON.stringify(user));
  firestore.collection("users").doc(user.uid).update(user);
}

export async function getCurrUserProfile() {
  const userProfileFromStorage = localStorage.getItem(localStorageKey);
  if (!userProfileFromStorage) {
    return await updateUserProfileToLocalStorage();
  }
  return JSON.parse(userProfileFromStorage) as UserDetailsDB;
}

export async function updateUserProfileToLocalStorage() {
  //sign in the user
  await auth.signInAnonymously();
  const currUserId = auth.currentUser?.uid;

  const user = (
    await firestore.collection("users").doc(currUserId).get()
  ).data() as UserDetailsDB;
  console.log(user);

  if (!user && !!currUserId) {
    console.log("creating yser........s");

    const newUser: UserDetailsDB = {
      address: "",
      city: "",
      country: "",
      email: "",
      fname: "",
      lname: "",
      phoneNumber: "",
      postalCode: "",
      uid: "",
    };
    //create user at local storage
    await auth.signInAnonymously().then((res) => {
      newUser.uid = res.user?.uid as string;
    });
    createEmptyUser(newUser);
    localStorage.setItem(localStorageKey, JSON.stringify(newUser));

    return newUser;
  }
  localStorage.setItem(localStorageKey, JSON.stringify(user));
  return user;
}

function createEmptyUser(user: UserDetailsDB) {
  firestore
    .collection("users")
    .doc(user.uid)
    .set({
      ...user,
      created: timestamp.now(),
    });
}
