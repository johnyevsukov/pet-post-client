/**
 * Protected route component.
 * Redirects users to the Login
 * page if no token is available
 * in local storage. Otherwise renders
 * children via react-router-dom Outlet.
 */

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" replace />;
  }
  return children ? children : <Outlet />;
};
