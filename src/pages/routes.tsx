import { createBrowserRouter } from "react-router-dom";

import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "./dashboard";
import Products from "./products";
import Cart from "./cart";
// import Routes from "./pages/Routes";
// import Menu from "./pages/Menu";
// import HomePage from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/home",
        element: <Dashboard />,
      },
      {
        path: "/products/:category",
        element: <Products />,
      },
      {
        path: "/aboutus",
        element: <h3>aboutus</h3>,
      },
      {
        path: "/contact",
        element: <h3>contact</h3>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
