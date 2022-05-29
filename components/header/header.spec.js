import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { Header } from './Header';
import * as hook from '../../hooks/useFetchMovies';

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
      <Provider store={mockStore({})}>
        <Header onAddMovie={() => {}} />
      </Provider>,
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: mockSearch } });
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '' } });

    expect(fetchMoviesSpy).toHaveBeenCalledTimes(1);
  });
  it('should fetch movies on onSearchSubmit', () => {
    render(
      <Provider store={mockStore({})}>
        <Header onAddMovie={() => {}} />
      </Provider>,
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: mockSearch } });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    expect(setSearchSpy).toHaveBeenNthCalledWith(1, { search: mockSearch });
    expect(fetchMoviesSpy).toHaveBeenNthCalledWith(1, { search: mockSearch });
  });
});
