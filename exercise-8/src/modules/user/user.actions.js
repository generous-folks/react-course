export const LOGIN = 'user/LOGIN';
export const LOGOUT = 'user/LOGOUT';

const encryptUserCredentials = () => {};
const loginAPI = () => Promise.resolve({ id: 'xyz', mail: 'foo@bar.com', name: 'Foo Bar' });
const getUser = () => ({ uid: 'xyz' });
const logoutAPI = args => Promise.resolve(args);

export const login = (email, password) => async dispatch => {
  try {
    const encryptedUser = encryptUserCredentials(email, password);
    const user = await loginAPI(encryptedUser);

    localStorage.setItem('user', JSON.stringify(user));

    return dispatch({ type: LOGIN, user });
  } catch (error) {
    dispatch({ type: LOGIN, error });
  }
};

export const logout = () => async (dispatch, getState) => {
  try {
    const user = getUser(getState());
    await logoutAPI(user);

    localStorage.removeItem('user');

    return dispatch({ type: LOGOUT, id: user.id });
  } catch (error) {
    dispatch({ type: LOGOUT, error });
  }
};
