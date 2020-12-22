import { ADD_TO_CART, REMOVE_FROM_CART } from '../cart.actions';
import { cartReducer, initialState } from '../cart.reducer';

describe('cart.reducer', () => {
  describe('ADD_TO_CART', () => {
    it('should set cart in the state', () => {
      expect(
        cartReducer(initialState, { type: ADD_TO_CART, article: { id: 'foo' } }),
      ).toMatchObject({
        ...initialState,
        articles: { foo: { id: 'foo' } },
      });
    });

    it('should add a "occurrences" property of value 2 to an existing single article matching the action.article', () => {
      const state = {
        ...initialState,
        articles: { foo: { id: 'foo' } },
      };

      expect(cartReducer(state, { type: ADD_TO_CART, article: { id: 'foo' } })).toMatchObject({
        ...state,
        articles: { foo: { id: 'foo', occurrences: 2 } },
      });
    });

    it('should increment the "occurrences" property when it is already set on a matching stored article', () => {
      const state = {
        ...initialState,
        articles: { foo: { id: 'foo', occurrences: 2 } },
      };

      expect(cartReducer(state, { type: ADD_TO_CART, article: { id: 'foo' } })).toMatchObject({
        ...state,
        articles: { foo: { id: 'foo', occurrences: 3 } },
      });
    });
  });

  describe('REMOVE_FROM_CART', () => {
    it('should decrement the "occurrences" property when it is already set on a matching stored article', () => {
      const state = {
        ...initialState,
        articles: { foo: { id: 'foo', occurrences: 2 } },
      };

      expect(cartReducer(state, { type: REMOVE_FROM_CART, id: 'foo' })).toMatchObject({
        ...state,
        articles: { foo: { id: 'foo', occurrences: 1 } },
      });
    });

    it('should remove the matching stored article when its occurrences property is of value 1', () => {
      const state = {
        ...initialState,
        articles: { foo: { id: 'foo', occurrences: 1 } },
      };

      expect(cartReducer(state, { type: REMOVE_FROM_CART, id: 'foo' })).toMatchObject({
        ...state,
        articles: {},
      });
    });

    it('should remove the matching stored article when it has no occurrences property set', () => {
      const state = {
        ...initialState,
        articles: { foo: { id: 'foo' } },
      };

      expect(cartReducer(state, { type: REMOVE_FROM_CART, id: 'foo' })).toMatchObject({
        ...state,
        articles: {},
      });
    });
  });
});
