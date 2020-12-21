export const LOGIN = 'user/LOGIN';
export const LOGOUT = 'user/LOGOUT';

const encryptUserCredentials = () => {};
const loginAPI = () => Promise.resolve({ id: 'xyz', mail: 'foo@bar.com', name: 'Foo Bar' });
const getUserId = () => 'xyz';
const logoutAPI = Promise.resolve;

export const login = (email, password) => async dispatch => {
  try {
    const encryptedUser = encryptUserCredentials(email, password);
    const user = await loginAPI(encryptedUser);

    return dispatch({ type: LOGIN, user });
  } catch (error) {
    dispatch({ type: LOGIN, error });
  }
};

export const logout = () => async (dispatch, getState) => {
  try {
    const userId = getUserId(getState());
    await logoutAPI(userId);

    return dispatch({ type: LOGOUT, id: userId });
  } catch (error) {
    dispatch({ type: LOGOUT, error });
  }
};
