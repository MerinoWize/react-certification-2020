import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from '../Private';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import Header from '../Header';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import VideoPage from '../../pages/VideoPage';

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
            <PrivateRoute path="/video/:id">
              <VideoPage />
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
