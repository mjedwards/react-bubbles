import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={renderProps => {
        if (localStorage.getItem("MTN-token")) {
          return <Component {...renderProps} />;
        } else {
          return <Redirect to='/' />;
        }
      }}
    />
  );
};

export default PrivateRoute;
