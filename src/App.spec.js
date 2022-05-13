import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import App from './App';
import * as hook from './hooks/useFetchMovies';

const middlewares = [thunk]

describe('App', () => {
    const movie = { release_date: '2022-11-11', title: 'Title', genres: ['Action'], poster_path: 'url', id: '1' }
    const selectedMovie = {
      ...movie,
      vote_average: 4.5,
      runtime: 100,
      overview: 'Good'
    }
    const initialState = { movies: {
        value: [ movie ],
        selectedMovie: selectedMovie,
        totalAmount: 0,
    }};
    let mockStore;

    beforeEach(() => {
      mockStore = configureStore(middlewares);
    });

    it('should render', () => {
      render(
        <Provider store={mockStore(initialState)}>
            <App />
        </Provider>
      );

      expect(screen.queryByText(/Something wen wrong/i)).not.toBeInTheDocument();
    });

    it('should initially show movieDetails when id present in route', () => {
      jest.spyOn(hook, 'useFetchMovies').mockImplementation(() => ({
        search: { get: () => '1' },
        setSearch: jest.fn(),
        fetchMovies: jest.fn(),
      }));

      render(
        <Provider store={mockStore(initialState)}>
            <App />
        </Provider>
      );

      expect(screen.getByText('Good')).toBeInTheDocument();
    })
});
