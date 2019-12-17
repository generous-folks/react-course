import { useEffect } from 'react'
import { useArticles } from "./articles.context";
import { requestArticles } from './articles.actions';

export const useArticlesSelector = () => {
  const [{ articles }, dispatch] = useArticles();

  useEffect(() => {
    if(articles.length === 0) {
      dispatch(requestArticles());
    }
  }, [dispatch, articles])

  return articles;
}
