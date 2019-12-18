import React from 'react';

import { Layout } from '../components/layout.component';
import { ArticlesList } from '../modules/articles/components/articlesList.component';
import { Cart } from '../modules/cart/components/cart.component';


export const HomePage = () => (
  <Layout>
    <h2>Home page</h2>
    <ArticlesList />
    <Cart/>
  </Layout>
);
