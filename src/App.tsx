import { useEffect } from "react";
import "./assets/styles/utils.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/routes";
import { initDB } from "./services/indexedDB";
import { SnackbarProvider } from "notistack";
import { getCartItems } from "./services/cartServices";
import { getProductsAndUpdateToDb } from "./firebase/functions/getProductsAndUpdateToDB";
import { hotjar } from "react-hotjar";

function App() {
  //init store
  initDB();
  useEffect(() => {
    // const siteId = 3520641;
    // const hotjarVersion = 6;

    // hotjar.initialize(siteId, hotjarVersion);
    (async () => {
      await getProductsAndUpdateToDb();
    })();
    getCartItems();

    if (hotjar.initialized()) {
      hotjar.identify("USER_ID", { userProperty: "value" });
    }
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
