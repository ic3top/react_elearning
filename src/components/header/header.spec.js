import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import { Header } from './Header';
import * as hook from "../../hooks/useFetchMovies";

describe('Header', () => {
    let fetchMoviesSpy;
    let setSearchSpy;

    const mockStore = configureStore();
    const mockSearch = 'movie';

    beforeEach(() => {
        fetchMoviesSpy = jest.fn();
        setSearchSpy = jest.fn();
        jest.spyOn(hook, 'useFetchMovies').mockImplementation(() => ({
            search: { get: jest.fn() },
            setSearch: setSearchSpy,
            fetchMovies: fetchMoviesSpy,
        }));
    });

    it('should have onInputChange that fetch movies on empty input', () => {
        render(
            <Router>
                <Provider store={mockStore({})}>
                    <Header onAddMovie={() => {}} />
                </Provider>
            </Router>
        );

        fireEvent.change(screen.getByRole('textbox'), { target: { value: mockSearch }});
        fireEvent.change(screen.getByRole('textbox'), { target: { value: '' }});

        expect(fetchMoviesSpy).toHaveBeenCalledTimes(1);
    });
    it('should fetch movies on onSearchSubmit', () => {
        render(
            <Router>
                <Provider store={mockStore({})}>
                    <Header onAddMovie={() => {}} />
                </Provider>
            </Router>
        );

        fireEvent.change(screen.getByRole('textbox'), { target: { value: mockSearch }});
        fireEvent.click(screen.getByRole('button', { name: 'Search' }));

        expect(setSearchSpy).toHaveBeenNthCalledWith(1, { search: mockSearch });
        expect(fetchMoviesSpy).toHaveBeenNthCalledWith(1, { search: mockSearch });
    });
});
