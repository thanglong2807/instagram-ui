import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = (): boolean => {
  const checkLogin = useSelector((state: any) => state.checkLogin);
  return checkLogin && checkLogin.loggedIn;
};
const LoginWrapper = (): JSX.Element => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default LoginWrapper;
