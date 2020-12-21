import { useEffect, useState, useMemo } from 'react';
import { useUserState } from '../user/user.context';

import { useHistory, useLocation } from 'react-router-dom';
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
  const isSameLocation = useMemo(() => pathname === initialRoute, [pathname, initialRoute]);
  const redirectRouteDestination = useMemo(() => initialRoute, [initialRoute]);

  useEffect(() => {
    if (isConnected && isLoginRoute && !isSameLocation) {
      push(redirectRouteDestination);
    }
  }, [isConnected, push, isLoginRoute, isSameLocation, redirectRouteDestination]);

  useEffect(() => {
    if (!isConnected && pathname !== ROUTES.login && isProtectedRoute) {
      setInitialRoute(pathname);
      push(ROUTES.login);
    }
  }, [isConnected, push, pathname, isProtectedRoute]);
};
