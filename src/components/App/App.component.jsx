import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import PrivateRoute from '../Private';
// import Fortune from '../Fortune';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import Header from '../Header';

const App = () => {
  useLayoutEffect(() => {
    const { body } = document;

    const rotateBackground = () => {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    };

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Layout>
          <Switch>
            <PrivateRoute exact path="/">
              <HomePage />
            </PrivateRoute>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute exact path="/secret">
              <SecretPage />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          {/* <Fortune /> */}
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
