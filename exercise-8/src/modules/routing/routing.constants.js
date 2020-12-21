export const ROUTES = {
  home: '/',
  login: '/login',
  logout: '/logout',
  about: '/about',
  contact: '/contact',
  article: '/articles/:id',
  checkout: '/checkout',
};

export const PROTECTED_ROUTES = [ROUTES.login, ROUTES.checkout];
