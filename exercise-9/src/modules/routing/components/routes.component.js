import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { CartProvider } from '../../cart/cart.context';
import { ArticlesProvider } from '../../articles/articles.context';

import { HomePage } from '../../../pages/home.page';
import { ArticlePage } from '../../../pages/article.page';
import { AboutPage } from '../../../pages/about.page';
import { LoginPage } from '../../../pages/login.page';
import { ContactPage } from '../../../pages/contact.page';
import { CheckoutPage } from '../../../pages/checkout.page';

import { ROUTES } from '../routing.constants';
import { useLoginRedirect } from '../routing.hooks';

export function AppRoutes() {
  useLoginRedirect();

  return (
    <>
      <Switch>
        <Route path={ROUTES.about}>
          <AboutPage />
        </Route>
        <Route path={ROUTES.contact}>
          <ContactPage />
        </Route>
        <Route path={ROUTES.login}>
          <LoginPage />
        </Route>
      </Switch>
      <ArticlesProvider>
        <CartProvider>
          <Switch>
            <Route exact path={ROUTES.checkout}>
              <CheckoutPage />
            </Route>
            <Route path={ROUTES.article}>
              <ArticlePage />
            </Route>
            <Route exact path={ROUTES.home}>
              <HomePage />
            </Route>
          </Switch>
        </CartProvider>
      </ArticlesProvider>
    </>
  );
}
