import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './core/Home';
import Manage from './core/Manage';
import Calculate from './core/Calculate';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/manage" exact component={Manage} />
        <Route path="/calculate" exact component={Calculate} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
