import { Outlet } from "react-router-dom";
// Providing a basic layout to all the child components using layout wrapper on Outlet
export default function ProtectedRoutes() {
  console.log("Protected");

  return <Outlet />;
}
