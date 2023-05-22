import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../layout/Layout";
import ProtectedRoutes from "./ProtectedRoutes";
import Spinner from "../components/spinner";

const Dashboard = lazy(() => import("./dashboard"));
const Category = lazy(() => import("./products/[Category]"));
const SingleProduct = lazy(() => import("./products/singleProduct"));
const Products = lazy(() => import("./products"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Spinner />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<Spinner />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/products/:category",
        element: (
          <Suspense fallback={<Spinner />}>
            <Category />
          </Suspense>
        ),
      },
      {
        path: "/product",
        element: (
          <Suspense fallback={<Spinner />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "/products/:category/product",
        element: (
          <Suspense fallback={<Spinner />}>
            <SingleProduct />
          </Suspense>
        ),
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
        path: "/checkout",
        element: (
          <Suspense fallback={<Spinner />}>
            <ProtectedRoutes />
          </Suspense>
        ),
        children: [
          {
            path: "/checkout",
            element: <h3>Checkout</h3>,
          },
        ],
      },
    ],
  },
]);
