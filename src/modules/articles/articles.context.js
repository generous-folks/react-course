import React from 'react'

const CartStateContext = React.createContext()
const CartDispatchContext = React.createContext()


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

function useCart() {
  return [useCartState(), useCartDispatch()];
}

export { useCart, useCartState, useCartDispatch }
