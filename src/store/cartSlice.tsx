import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sneaker } from '../types/sneaker';

export interface CartItem {
  id: Sneaker['id'];
  size: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<CartItem['id']>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    changeQuantity: (
      state,
      action: PayloadAction<{ item: CartItem; type: 'inc' | 'dec' }>
    ) => {
      const { item, type } = action.payload;
      const cartItem = state.items.find(
        (i) => i.id === item.id && i.size === item.size
      );

      if (!cartItem) return;

      if (type === 'dec' && cartItem.size > 1) cartItem.quantity -= 1;
      else if (type === 'inc') cartItem.quantity += 1;
    },
  },
});

export const { addToCart, removeFromCart, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
