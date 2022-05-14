import React from 'react';
import thunk from 'redux-thunk';
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { fetchMovies, fetchMovieById, deleteMovieById, updateMovie, createMovie } from './moviesAsyncActions';
import { getMoviesList } from '../../api/moviesApi';

import moviesReducer from './movieSLice';

describe('moviesSlice', () => {
    let mockMovie;
    let mockMoviesList;
    let mockMoviesListRes;
    let mockStore;

    beforeEach(() => {
        mockMovie = { name: 'movie' };
        mockMoviesList = [
            { ...mockMovie, id: '1' },
            { ...mockMovie, id: '2' }
        ];
        mockMoviesListRes = { data: mockMoviesList, totalAmount: 10 };
        mockStore = configureStore([thunk]);
    });

    it('should set movies and totalAmount on fetchMovies', () => {
        expect(
            moviesReducer({}, fetchMovies.fulfilled({ response: mockMoviesListRes }))
        ).toEqual({ value: mockMoviesListRes.data, totalAmount: mockMoviesListRes.totalAmount })
    });

    it('should set selectedMovie', () => {
        expect(
            moviesReducer({}, fetchMovieById.fulfilled(mockMovie))
        ).toEqual({ selectedMovie: mockMovie })
    });

    it('should delete corresponding movie', () => {
        expect(
            moviesReducer({ value: mockMoviesList, totalAmount: mockMoviesList.length }, deleteMovieById.fulfilled(mockMoviesList[0].id))
        ).toEqual({ value: [mockMoviesList[1]], totalAmount: mockMoviesList.length - 1 });
    });

    it('should update corresponding movie', () => {
        const movieToUpdate = { ...mockMoviesList[0], name: 'new'};
        expect(
            moviesReducer({ value: mockMoviesList }, updateMovie.fulfilled(movieToUpdate))
        ).toEqual({ value: [movieToUpdate, ...mockMoviesList.slice(1)] });
    });

    it('should add newly created movie', () => {
        const newMovie = { name: 'new'};
        expect(
            moviesReducer({ value: mockMoviesList, totalAmount: mockMoviesList.length }, createMovie.fulfilled({ data: newMovie }))
        ).toEqual({ value: [...mockMoviesList, newMovie], totalAmount: mockMoviesList.length + 1 });
    });
});
