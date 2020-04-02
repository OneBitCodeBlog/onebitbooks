import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('cart/add_book');
export const removeFromCart = createAction('cart/remove_book');
export const updateAmount = createAction('cart/update_amount');
