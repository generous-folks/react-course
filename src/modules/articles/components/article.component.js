import React from 'react';
import PropTypes from 'prop-types';

import { ArticleCard } from './articleCard.component';
import { useArticlesSelector } from '../articles.selectors';


export const Article = ({ id }) => {
  const articles = useArticlesSelector();
  const article = articles.find(item => item.id === id);

  return article ? <ArticleCard { ...article } /> : null;
}

Article.propTypes = {
  id: PropTypes.string.isRequired,
}
