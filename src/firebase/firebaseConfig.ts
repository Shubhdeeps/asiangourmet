import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore/bundle";

const firebaseConfig = {
  apiKey: "AIzaSyA4ebgYau9xOYBSua3bvKBRYAnOxLggP_8",
  authDomain: "asiangourmettallinn.firebaseapp.com",
  projectId: "asiangourmettallinn",
  storageBucket: "asiangourmettallinn.appspot.com",
  messagingSenderId: "384355767972",
  appId: "1:384355767972:web:ec52394edb61a9c8593831",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firestore = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();
export const database = firebaseApp.database();
export const provider = new firebase.auth.GoogleAuthProvider();
export const FieldValue = firebase.firestore.FieldValue;
export const Timestamp = firebase.firestore.Timestamp.now();
export const timestamp = firebase.firestore.Timestamp;
