import React, { useState, useEffect } from 'react';
import { getArticles } from './utils/api.utils';

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    try {
      if (articles.length === 0) {
        getArticles()
          .then(res => setArticles(res))
          .catch(err => console.error(err));
      }
    } catch (error) {
      throw new Error(`Fetch articles failed: ${error.message}`);
    }
  }, [articles]);

  return (
    <div>
      <h2>Home Page</h2>
      <div>
        <h4>Articles</h4>
        <ul>{articles.length > 0 && articles.map(({ id, name }) => <li key={id}>{name}</li>)}</ul>
      </div>
    </div>
  );
}
