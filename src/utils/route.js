import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import cookie from 'react-cookies';

const PrivateRoute = ({ element }) => {
  return cookie.load('connect.sid') !== undefined ? element : <Navigate to="/login" />;
};

const PublicRoute = ({ render: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export { PrivateRoute, PublicRoute };
