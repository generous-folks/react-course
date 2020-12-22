export const ROUTES = {
  home: '/',
  login: '/login',
  about: '/about',
  contact: '/contact',
  article: '/articles/:id',
  checkout: '/checkout',
};

export const PROTECTED_ROUTES = [ROUTES.checkout];
