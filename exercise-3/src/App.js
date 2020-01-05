import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/home.page';
import { AboutPage } from './pages/about.page';

export default function App() {
  return (
    <Switch>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}
