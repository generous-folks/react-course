import React from 'react'

const CartStateContext = React.createContext()
const CartDispatchContext = React.createContext()

function cartReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return { cart: state.cart + 1 }
    }
    case 'decrement': {
      return { cart: state.cart - 1 }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = React.useReducer(cartReducer, { cart: 0 })
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  )
}

function useCartState() {
  const context = React.useContext(CartStateContext)
  if (context === undefined) {
    throw new Error('useCartState must be used within a CartProvider')
  }
  return context
}

function useCartDispatch() {
  const context = React.useContext(CartDispatchContext)
  if (context === undefined) {
    throw new Error('useCartDispatch must be used within a CartProvider')
  }
  return context
}

export { CartProvider, useCartState, useCartDispatch }
