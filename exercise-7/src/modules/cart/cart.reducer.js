import { ADD_TO_CART, REMOVE_FROM_CART } from './cart.actions';

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
      const targetArticle = Object.values(state.articles).find(article => article.id === action.id);
      const targetOccurrences = targetArticle.occurrences;
      const isNumber = typeof targetOccurrences === 'number';
      const isSuperiorToOne = targetOccurrences > 1;
      const shouldDecrement = isNumber && isSuperiorToOne;

      if (shouldDecrement) {
        return {
          ...state,
          articles: {
            ...state.articles,
            [action.id]: { ...targetArticle, occurrences: targetOccurrences - 1 },
          },
        };
      }

      return {
        ...state,
        articles: Object.keys(state.articles).reduce(
          (acc, curr) => (action.id === curr ? acc : { ...acc, [curr]: state.articles[curr] }),
          {},
        ),
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
