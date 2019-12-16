
import React from 'react'
import PropTypes from 'prop-types'
import { cartReducer, initialState } from './cart.reducer'
import { CartStateContext, CartDispatchContext } from './cart.context'


export const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(cartReducer, initialState)
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.element,
}
