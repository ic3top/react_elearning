import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import * as hook from '../../hooks/useFetchMovies';
import { MovieFilters } from './MovieFilters';

describe('MovieFilters', () => {
  let fetchMoviesSpy;
  let setSearchSpy;

  const mockStore = configureStore();

  beforeEach(() => {
    fetchMoviesSpy = jest.fn();
    setSearchSpy = jest.fn();
    jest.spyOn(hook, 'useFetchMovies').mockImplementation(() => ({
      search: { get: jest.fn() },
      setSearch: setSearchSpy,
      fetchMovies: fetchMoviesSpy,
    }));
  });

  it('should fetch movies on choosing new genre', () => {
    const genre = 'Documentary';
    render(
      <Provider store={mockStore({})}>
        <MovieFilters />
      </Provider>,
    );

    fireEvent.click(screen.getByRole('button', { name: genre }));

    expect(setSearchSpy).toHaveBeenCalledWith({ genre });
    expect(fetchMoviesSpy).toHaveBeenCalledWith({ genre });
  });

  it('should fetch movies on changing sort', () => {
    const sortBy = 'release_date';
    render(
      <Provider store={mockStore({})}>
        <MovieFilters />
      </Provider>,
    );

    fireEvent.change(screen.getByRole('combobox', { name: /sort by/i }), { target: { value: sortBy } });

    expect(setSearchSpy).toHaveBeenCalledWith({ sortBy });
    expect(fetchMoviesSpy).toHaveBeenCalledWith({ sortBy });
  });
});
