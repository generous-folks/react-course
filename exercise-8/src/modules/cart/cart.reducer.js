import { ADD_TO_CART, REMOVE_FROM_CART } from './cart.actions';
import { removeItemOccurrence } from './cart.utils';

export const initialState = {
  articles: {},
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id } = action.article;
      // It doesn't already exist in the cart articles
      if (!state.articles[id]) {
        return { ...state, articles: { ...state.articles, [id]: action.article } };
      }

      // Now, we know we have at least one occurrence of the current article in the cart
      const occurrences = state.articles[id].occurrences;

      const incrementedArticle = {
        ...action.article,
        // if it's undefined we haven't set it yet because we only have one, fallback on 2
        occurrences: occurrences ? occurrences + 1 : 2,
      };

      return { ...state, articles: { ...state.articles, [id]: incrementedArticle } };
    }

    case REMOVE_FROM_CART: {
      // We apply some magic function and voila, one article removed.
      return { ...state, articles: removeItemOccurrence(state.articles, action.id) };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
