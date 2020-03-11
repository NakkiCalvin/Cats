import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ForgotPage from './pages/ForgotPage';
import LoginPage from './pages/LoginPage';

const Login = () => (
  <Switch>
    <Route path="/login" component={LoginPage} />
    <Route path="/forgot" component={ForgotPage} />
  </Switch>
);

export default Login;
