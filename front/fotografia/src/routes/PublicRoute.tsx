import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface Props {
  children: React.ReactElement;
}

export const PublicRoute = ({ children }: Props) => {
  const { user } = useAuth();
  if (user) return <Navigate to="/" replace />;
  return children;
};
