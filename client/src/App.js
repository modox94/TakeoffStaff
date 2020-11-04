import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import PrivateRoute from './components/Private/Private';
import LoginPage from './components/LoginPage/LoginPage';
import Profile from './components/Profile/Profile';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path='/login'>
          <LoginPage />
        </Route>

        <PrivateRoute exact path='/profile'>
          <Profile />
        </PrivateRoute>

        <Route exact path=''>
          <Redirect to='/profile' />
        </Route>

        <Route path='/'>{'Page 404'}</Route>
      </Switch>
    </>
  );
}

export default App;
