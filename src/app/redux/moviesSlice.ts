import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../services/api';
import { Movie } from '../types/Movie';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await api.get('');
  return response.data.products;
});

interface MoviesState {
  movies: Movie[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MoviesState = {
  movies: [],
  status: 'idle',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.status = 'idle';
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export default moviesSlice.reducer;
