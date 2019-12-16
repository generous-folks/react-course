import { ADD_TO_CART, REMOVE_FROM_CART } from "./cart.actions"
import { removeArticleById } from "./cart.utils"

export const initialState = {
  articles: []
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return { ...state, articles: [...state.articles, action.article] }
    }
    case REMOVE_FROM_CART: {
      return { ...state, articles: removeArticleById(state.articles, action.id) }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
