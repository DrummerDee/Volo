import React from "react";
import { Navigate } from "react-router-dom";

function RequireAuth({ Component }) {
  if (!localStorage.getItem("VoloLoggedIn")) {
    return <Navigate to="/login" />;
  }
  return <Component />;
}
export default RequireAuth;
