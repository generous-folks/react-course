import React from "react";
import { Switch, Route } from "react-router-dom";

import { CartProvider } from "./modules/cart/cart.context";
import { ArticlesProvider } from "./modules/articles/articles.context";

import { HomePage } from "./pages/home.page";
import { ArticlePage } from "./pages/article.page";


export default function App() {
  return (
    <>
      <Switch>
        <Route path="/about">
        </Route>
      </Switch>
      <ArticlesProvider>
        <CartProvider>
          <Switch>
            <Route path="/articles/:id">
              <ArticlePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </CartProvider>
      </ArticlesProvider>
    </>
  );
}
