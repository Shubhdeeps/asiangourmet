/* eslint-disable */
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Register from "./registration";
import LoaderScreen from "../components/loader/LoaderScreen";
import { auth } from "../firebase/firebaseConfig";

export const ProtectedRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currUser, setCurrUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsLoading(true);
      if (user) {
        setCurrUser(user);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setCurrUser(null);
      }
    });
  }, [auth.currentUser]);

  if (isLoading) {
    return <LoaderScreen />;
  }

  return (
    <>{!!currUser && !!auth.currentUser?.uid ? <Outlet /> : <Register />}</>
  );
};

export default React.memo(ProtectedRoutes);
