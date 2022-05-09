import { createSlice } from '@reduxjs/toolkit'
import { fetchMovieById, fetchMovies, deleteMovieById, updateMovie, createMovie } from './moviesAsyncActions';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    value: [],
    selectedMovie: {},
    totalAmount: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieById.fulfilled, (state, action) => {
        state.selectedMovie = action.payload;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
        const { response } = action.payload;
        state.value = response.data;
        state.totalAmount = response.totalAmount;
    });
    builder.addCase(deleteMovieById.fulfilled, (state, action) => {
        state.value = state.value.filter((movie) => movie.id !== action.payload);
        --state.totalAmount;
    });
    builder.addCase(updateMovie.fulfilled, (state, action) => {
        state.value = state.value.map((movie) => movie.id !== action.payload.id ? movie : action.payload);
    });
    builder.addCase(createMovie.fulfilled, (state, action) => {
        state.value.push(action.payload.data);
        ++state.totalAmount;
    });
  }
});

export const {
  addMovie,
  editMovie,
  setMovies,
  setActiveGenre,
  setActiveSortBy,
} = moviesSlice.actions;

export default moviesSlice.reducer;
