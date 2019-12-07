const endpoint = 'https://us-central1-gofire-1280e.cloudfunctions.net/ArticleAPI';

export const getArticles = () =>
  fetch(endpoint)
    .then(res => res.json())
    .catch(err => console.log(err));

export const setArticle = article =>
  fetch(endpoint, { method: 'POST', body: article })
    .then(res => res.json())
    .catch(err => console.log(err));

export const updateArticle = article =>
  fetch(endpoint, { method: 'PUT', body: article })
    .then(res => res.json())
    .catch(err => console.log(err));

export const deleteArticle = article =>
  fetch(endpoint, { method: 'DELETE', body: article })
    .then(res => res.json())
    .catch(err => console.log(err));
