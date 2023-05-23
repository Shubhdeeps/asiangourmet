import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../layout/Layout";
import ProtectedRoutes from "./ProtectedRoutes";
import Spinner from "../components/spinner";
import AboutUs from "./aboutus";
const Dashboard = lazy(() => import("./dashboard"));
const Category = lazy(() => import("./products/[Category]"));
const SingleProduct = lazy(() => import("./products/singleProduct"));
const Products = lazy(() => import("./products"));
const HotThisWeek = lazy(() => import("./hotThisWeek"));
const Checkout = lazy(() => import("./checkout"));

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
        path: "/products",
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
        element: <AboutUs />,
      },
      {
        path: "/hotthisweek",
        element: (
          <Suspense fallback={<Spinner />}>
            <HotThisWeek />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/checkout",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
