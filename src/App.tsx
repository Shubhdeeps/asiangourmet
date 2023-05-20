import { useEffect } from "react";
import "./assets/styles/utils.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/routes";
import { initDBwithData } from "./services/indexedDB";
import data from "./assets/data.json";
import { SnackbarProvider } from "notistack";
import { getCartItems } from "./services/cartServices";

function App() {
  console.log("render app");
  initDBwithData(data);

  useEffect(() => {
    getCartItems();
    // searchProductBasedOnProductInitials("Pepino");
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
