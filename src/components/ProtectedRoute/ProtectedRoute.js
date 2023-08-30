// src/components/ProtectedRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    return <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
       redirect('/login')
      )
    }
  />
};
export default ProtectedRoute;
