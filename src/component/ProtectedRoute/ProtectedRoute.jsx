import React from "react";
import { Navigate } from "react-router-dom";

// THIS PROTECTED ROUTE CHECKS THAT ID LOGGED IN USER IS ADMIN THEN ONLY ALOWED TO USER ADMIN PANEL
function ProtectedRoute({ children }) {
  if (
    localStorage.getItem("token") &&
    JSON.parse(localStorage.getItem("user"))?.role === "admin"
  ) {
    return <>{children}</>;
  } else {
    // ELSE REDIRECT TO THE LOGIN PAGE AUTOMATICALLY
    return <Navigate to="/"></Navigate>;
  }
}

export default ProtectedRoute;
