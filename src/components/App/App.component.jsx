import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from '../Private';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import Header from '../Header';

import AuthProvider from '../../providers/Auth';
import WatchlistProvider from '../../providers/Watchlist';
import CurrentVideoContext from '../../providers/CurrentVideo';

import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import VideoPage from '../../pages/VideoPage';
import WatchlistPage from '../../pages/WatchlistPage';

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
        <WatchlistProvider>
          <CurrentVideoContext>
            <Layout header={<Header />}>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Route exact path="/video/:id">
                  <VideoPage />
                </Route>
                <PrivateRoute exact path="/watchlist">
                  <WatchlistPage />
                </PrivateRoute>
                <PrivateRoute exact path="/secret">
                  <SecretPage />
                </PrivateRoute>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </CurrentVideoContext>
        </WatchlistProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
