import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/home.page';
import { AboutPage } from './pages/about.page';
import { ContactPage } from './pages/contact.page';

export default function App() {
  return (
    <Switch>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}
