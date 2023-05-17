import { Outlet } from "react-router-dom";
import Layout from "../layout/Layout";
// Providing a basic layout to all the child components using layout wrapper on Outlet
export default function ProtectedRoutes() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
