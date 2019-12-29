import { ADD_TO_CART, REMOVE_FROM_CART } from "./cart.actions"
import { removeItemOccurrence } from "./cart.utils"

export const initialState = {
  articles: {},
}


export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id } = action.article;
      if (!state.articles[id]) {
        return { ...state, articles: { ...state.articles, [id]: action.article } }
      }

      const occurrences = state.articles[id].occurrences;
      const incrementedArticle = { ...action.article, occurrences: occurrences ? occurrences + 1 : 2 };

      return { ...state, articles: { ...state.articles, [id]: incrementedArticle } };
    }

    case REMOVE_FROM_CART: {
      return { ...state, articles: removeItemOccurrence(state.articles, action.id) }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
