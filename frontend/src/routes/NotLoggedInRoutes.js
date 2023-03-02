import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function NotLoggedInRoutes() {                 // fn for not logged in user
  const { user } = useSelector((state) => ({ ...state }));    // get user status as bool

  return user ? <Navigate to="/" /> : <Outlet />;             // if user == true return element Navigate else outlet
}
