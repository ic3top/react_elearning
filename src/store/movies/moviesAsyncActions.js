import { createAsyncThunk } from '@reduxjs/toolkit'
import * as moviesApi from '../../api/moviesApi';

export const fetchMovies = createAsyncThunk('movies/fetchAll', async ({
    sortBy: newSortBy,
    search: newSearchQuery,
    searchBy: newSearchBy,
    genre: newGenre
  } = {},
  { getState }
) => {
    const { movies: { sortBy, searchBy, searchQuery, genre: prevGenre } } = getState();

    const params = {
        sortBy: newSortBy || sortBy,
        searchBy: newSearchBy || searchBy,
        search: newSearchQuery || searchQuery,
    };

    if (newGenre && newGenre !== 'ALL') params.filter = newGenre;
    else if (prevGenre !== 'ALL' && newGenre !== 'ALL') params.filter = prevGenre;

    if (newSearchQuery === '') params.search = newSearchQuery;

    const response = await moviesApi.getMoviesList(params);

    return { response, params };
});

export const fetchMovieById = createAsyncThunk('movies/fetchById', async (movieId) => {
    const res = await moviesApi.getMovieById(movieId);
    return res;
});

export const deleteMovieById = createAsyncThunk('movies/deleteById', async (movieId) => {
    const res = await moviesApi.deleteMovie(movieId);
    return res;
});

export const updateMovie = createAsyncThunk('movies/update', async (movie) => {
    const res = await moviesApi.updateMovie(movie);
    return res;
});

export const createMovie = createAsyncThunk('movies/addNew', async (movie) => {
    const res = await moviesApi.createMovie(movie);
    return res;
});
