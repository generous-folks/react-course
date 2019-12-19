export const dispatchThunk = dispatch => param => {
  if (typeof param === 'function') {
    return param(dispatch);
  }

  return dispatch(param);
}
