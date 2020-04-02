import { createReducer } from '@reduxjs/toolkit';
import {
  addToCart,
  removeFromCart,
  updateAmount,
} from './actions';

const cart = createReducer([], {
  [addToCart]: (state, action) => {
    const { payload } = action;
    const { id } = payload;

    const bookExists = state.find(book => book.id === id);
    
    if (bookExists) {
      bookExists.amount = bookExists.amount + 1;
    } else {
      payload.amount = 1;
      state.push(payload);
    }
  },
  [removeFromCart]: (state, action) => {
    const productIndex = state.findIndex(book => book.id === action.payload);

    if (productIndex >= 0) {
      state.splice(productIndex, 1);
    }
  },
  [updateAmount]: (state, action) => {
    const { id, amount } = action.payload;
    const bookExists = state.find(book => book.id === id);

    if (bookExists) {
      console.log(action.payload)
      const bookIndex = state.findIndex(book => book.id === bookExists.id);

      if (bookIndex >= 0 && amount >= 0) {
        state[bookIndex].amount = Number(amount);
      }
    }

    return state;
  },
});

export default cart
