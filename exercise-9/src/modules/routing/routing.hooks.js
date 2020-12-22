import { useEffect, useState, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useUserState } from '../user/user.context';
import { PROTECTED_ROUTES, ROUTES } from './routing.constants';
import { isUserConnected } from '../user/user.selectors';

export const useLoginRedirect = () => {
  const state = useUserState();
  const isConnected = isUserConnected(state);
  const { pathname } = useLocation();
  const { push } = useHistory();

  const [initialRoute, setInitialRoute] = useState(
    pathname === ROUTES.login ? ROUTES.home : pathname,
  );

  const isProtectedRoute = PROTECTED_ROUTES.includes(pathname);
  const isLoginRoute = useMemo(() => pathname === ROUTES.login, [pathname]);

  useEffect(() => {
    if (isConnected && isLoginRoute) {
      push(initialRoute);
    }
  }, [isConnected, push, isLoginRoute, initialRoute]);

  useEffect(() => {
    if (!isConnected && isProtectedRoute) {
      setInitialRoute(pathname);
      push(ROUTES.login);
    }
  }, [isConnected, push, pathname, isProtectedRoute]);
};
