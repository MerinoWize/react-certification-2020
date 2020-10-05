import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// import { useAuth } from '../../providers/Auth';

function PrivateRoute({ children, ...rest }) {
  // const { authenticated } = useAuth();
  const authenticated = true;

  return (
    <Route
      {...rest}
      render={() => (authenticated ? children : <Redirect to="/login" />)}
    />
  );
}

export default PrivateRoute;
