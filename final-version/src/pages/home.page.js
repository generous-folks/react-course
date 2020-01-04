import React from 'react';

import { Layout } from '../components/layout.component';
import { ArticlesList } from '../modules/articles/components/articlesList.component';
import { CartLayout } from '../modules/cart/components/cartLayout.component';

export const HomePage = () => (
  <Layout>
    <h2>Home page</h2>
    <CartLayout>
      <ArticlesList />
    </CartLayout>
  </Layout>
);
