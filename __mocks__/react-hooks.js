export const useState = jest.fn(defaultValue => {
  return [defaultValue, jest.fn()];
});

export const useEffect = jest.fn(callback => {
  const cleanUp = callback();

  if (typeof cleanUp === 'function') {
    cleanUp();
  }
});

export const useRef = jest.fn(value => value);

export const useMemo = jest.fn(callback => callback());

export const useContext = jest.fn(value => value);
