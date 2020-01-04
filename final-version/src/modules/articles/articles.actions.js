import { getArticles } from '../../utils/api.utils';

export const REQUEST_ARTICLES = 'articles/REQUEST_ARTICLES';
export const RECEIVED_ARTICLES = 'articles/RECEIVED_ARTICLES';

export const requestArticles = () => async dispatch => {
  dispatch({ type: REQUEST_ARTICLES });

  const articles = await getArticles();

  dispatch({ type: RECEIVED_ARTICLES, articles });
};
