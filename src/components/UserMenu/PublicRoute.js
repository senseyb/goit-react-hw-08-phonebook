import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/auth.selectors";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  restricted = false,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) => {
      return isAuthenticated && restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      );
    }}
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
