import { useEffect } from "react";
import "./assets/styles/utils.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/routes";
import { initDBwithData } from "./services/indexedDB";
import data from "./assets/data.json";

function App() {
  console.log("render app");
  initDBwithData(data);

  useEffect(() => {
    console.log("init data");
    return () => {
      console.log("Unmount");
    };
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
