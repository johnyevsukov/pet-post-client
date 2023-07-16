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
