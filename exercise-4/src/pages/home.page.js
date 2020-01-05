import React, { useState, useEffect } from 'react';

import { Layout } from '../components/layout.component';

import { getArticles } from '../utils/api.utils';

export const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let mounted = true;
    try {
      if (articles.length === 0) {
        getArticles()
          .then(res => mounted && setArticles(res))
          .catch(err => console.error(err));
      }
    } catch (error) {
      throw new Error(`Fetch articles failed: ${error.message}`);
    }
    return () => (mounted = false);
  }, [articles]);

  return (
    <Layout>
      <h2>Home Page</h2>
      <div>
        <h4>Articles</h4>
        <ul>{articles.length > 0 && articles.map(({ id, name }) => <li key={id}>{name}</li>)}</ul>
      </div>
    </Layout>
  );
};
