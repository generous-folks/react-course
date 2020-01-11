import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getArticles } from '../utils/api.utils';

export const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (articles.length === 0) {
      getArticles()
        .then(res => mounted && setArticles(res))
        .catch(err => console.error(err));
    }
    return () => (mounted = false);
  }, [articles]);

  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/about">About Page</Link>
      <Link to="/contact">Contact Page</Link>
      <div>
        <h4>Articles</h4>
        <ul>{articles.length > 0 && articles.map(({ id, name }) => <li key={id}>{name}</li>)}</ul>
      </div>
    </div>
  );
};
