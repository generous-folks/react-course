const endpoint = '/fixtures/articles.json';

export const getArticles = () =>
  fetch(endpoint)
    .then(res => res.json())
    .catch(err => console.log(err));
