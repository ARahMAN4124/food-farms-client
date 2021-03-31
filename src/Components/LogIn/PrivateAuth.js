import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { userContext } from "../../App";

const PrivateAuth = ({ children, ...rest }) => {
  const [logInUser] = useContext(userContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        logInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateAuth;
