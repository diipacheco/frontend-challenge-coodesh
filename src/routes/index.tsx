import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Profile from '../pages/Profile';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/profile/:id" component={Profile} />
    </Switch>
  );
};
