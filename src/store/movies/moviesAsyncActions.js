import { createAsyncThunk } from '@reduxjs/toolkit'
import * as moviesApi from '../../api/moviesApi';

export const fetchMovies = createAsyncThunk('movies/fetchAll', async ({
    sortBy: newSortBy,
    search: newSearchQuery,
    searchBy: newSearchBy,
    genre: newGenre
  } = {}
) => {

    const params = {
        sortBy: newSortBy || 'release_date',
        searchBy: newSearchBy || 'title',
        search: newSearchQuery || '',
    };

    if (newGenre && newGenre !== 'ALL') params.filter = newGenre;

    const response = await moviesApi.getMoviesList(params);

    return { response };
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
