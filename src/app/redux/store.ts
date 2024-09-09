import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import moviesReducer from './moviesSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    movies: moviesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
