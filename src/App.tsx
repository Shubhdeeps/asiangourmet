import { useEffect, useLayoutEffect } from "react";
import "./assets/styles/utils.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/routes";
import { initDB } from "./services/indexedDB";
import { SnackbarProvider } from "notistack";
import { getCartItems } from "./services/cartServices";
import { getProductsAndUpdateToDb } from "./firebase/functions/getProductsAndUpdateToDB";

import { updateUserProfileToLocalStorage } from "./firebase/functions/getCurrUserProfile";

function App() {
  //init store
  initDB();

  useLayoutEffect(() => {
    (async () => {
      await getProductsAndUpdateToDb();
    })();
    getCartItems();
  }, []);

  useEffect(() => {
    (async () => {
      await updateUserProfileToLocalStorage();
    })();
  }, []);

  return (
    <>
      <SnackbarProvider maxSnack={6}>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </>
  );
}

export default App;
