# 7/ Providers cold shower, a global state struggle

| Action | Files                                                    | Exports                                                |
| ------ | -------------------------------------------------------- | ------------------------------------------------------ |
| CREATE | src/modules/user/user.actions.js                         | {login, logout}                                        |
| CREATE | src/modules/user/user.reducer.js                         | {initialState, userReducer}                            |
| CREATE | src/modules/user/user.context.js                         | {useUser, useUserState, useUserDispatch, UserProvider} |
| CREATE | src/modules/user/user.hook.js                            | {usePersistedUser}                                     |
| CREATE | src/modules/user/user.selectors.js                       | {getUser, isConnectedUser}                             |
| CREATE | src/modules/user/components/login.component.js           | {Login}                                                |
| CREATE | src/pages/login.page.js                                  | {LoginPage}                                            |
| CREATE | src/pages/checkout.page.js                               | {CheckoutPage}                                         |
| CREATE | src/modules/routing/routing.hooks.js                     | {useLoginRedirect}                                     |
| CREATE | src/modules/routing/routing.constants.js                 | {ROUTES, PROTECTED_ROUTES}                             |
| CREATE | src/modules/routing/components/routes.component.js       | {AppRoutes}                                            |
| MODIFY | src/App.js                                               | {App}                                                  |
| MODIFY | src/modules/articles/components/articleCard.component.js | {ArticleCard}                                          |

## TL;DR

It's raining modules, let's create the user, checkout and routing ones !

We need a Checkout page but the user must be logged in to access it. So we also need a Login page.
We'll mock the user api and authentication process for now.
We need to be redirected to the login page but only from the checkout page.

## Step by step

To begin with, let's duplicate the **articles** modules and rename it user, it should be pretty step forward to adapt it.

### src/modules/user/user.actions.js

#### login

We need a **login** action creator, a thunk in this case.

```js
/**
 *
 * @param {string} email
 * @param {string} password
 */
export const login = (email, password) => async dispatch => {};
```

You need to:

- await a call from **signIn** API method with **email** and **password** as parameters to get the user value.
- Set the user in the localStorage under the key "user"
- return dispatch the **LOGIN** action

#### logout

```js
export const logout = () => async (dispatch, getState) => {};
```

You need to:

- get the user value from the store using the **getUser** selector and **getState**
- call the **signOut** methods othe the API
- Remove the user from the localStorage
- return dispatch the **LOGOUT** action with user as property

### src/modules/user/user.reducer.js
