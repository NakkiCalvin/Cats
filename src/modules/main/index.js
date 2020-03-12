import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../features/MainPage/Home/Home';

const Main = () => (
  <div>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/Cats" component={Home} />
      <Route path="/Persons" component={Home} />
    </Switch>
  </div>
);

export default Main;
