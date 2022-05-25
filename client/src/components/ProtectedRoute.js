import React from "react";
import { Navigate } from "react-router-dom";
import { Route } from "react-router";
import jwt_decode from "jwt-decode";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  var loggedIn = false;
  if (isAuthenticated) {
    const jwt_token = jwt_decode(isAuthenticated);
    console.log(jwt_token);
    loggedIn = +new Date(+jwt_token.exp * 1000) > +new Date();
    if (!loggedIn) localStorage.removeItem("token");
  }

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/signin" />
      }
    />
  );
}

export default ProtectedRoute;