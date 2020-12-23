export const usePersistedUser = () => {
  return localStorage.getItem('user');
};
