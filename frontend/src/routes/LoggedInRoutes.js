// imports
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/login";

export default function LoggedInRoutes() {                  // fn for routes if logged in
  const { user } = useSelector((state) => ({ ...state }));  // get user status
  return user ? <Outlet /> : <Login />;                     // return Outlet if user == true else return Login
}
