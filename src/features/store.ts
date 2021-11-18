import { configureStore } from '@reduxjs/toolkit';
import { movieReducer } from './movies/moviesReducer';

export const store = configureStore({
  reducer: { movies: movieReducer },
  devTools: true,
});
