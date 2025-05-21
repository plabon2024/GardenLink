import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
console.log(location)
  if (user && user.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;
