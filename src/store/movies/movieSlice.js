import { createSlice } from '@reduxjs/toolkit'
import { fetchMovieById, fetchMovies, deleteMovieById, updateMovie, createMovie } from './moviesAsyncActions';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    value: [],
    totalAmount: 0,

    genre: 'ALL',
    sortBy: 'release_date',
    searchBy: 'title',
    searchQuery: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieById.fulfilled, (state, action) => {
        state.value.push(action.payload.data);
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
        const { response, params } = action.payload;
        return {
            value: response.data,
            totalAmount: response.totalAmount,
            searchQuery: params.search,
            genre: params.filter || 'ALL',
            ...params,
        }
    });
    builder.addCase(deleteMovieById.fulfilled, (state, action) => {
        state.value = state.value.filter((movie) => movie.id !== action.payload);
        --state.totalAmount;
    });
    builder.addCase(updateMovie.fulfilled, (state, action) => {
        state.value = state.value.map((movie) => movie.id !== action.payload.id ? movie : action.payload);
        ++state.totalAmount;
    });
    builder.addCase(createMovie.fulfilled, (state, action) => {
        state.value.push(action.payload.data);
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
