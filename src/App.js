import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./pages/home.page";

export default function App() {
  return (
        <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/articles/:id">

          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
  );
}
