// src/redux/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../types/Movie';

interface CartItem {
  movie: Movie;
  quantity: number;
}

interface CartState {
  items: { [id: number]: CartItem };
  totalItems: number;
}

const initialState: CartState = {
  items: {},
  totalItems: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Movie>) => {
      const movie = action.payload;
      if (!state.items[movie.id]) {
        state.items[movie.id] = { movie, quantity: 1 };
        state.totalItems += 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const movieId = action.payload;
      if (state.items[movieId]) {
        delete state.items[movieId];
        state.totalItems -= 1;
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      if (quantity > 0 && state.items[id]) {
        state.items[id].quantity = quantity;
      }
    },
  
    clearCart: (state) => {
      state.items = {};
      state.totalItems = 0;
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
