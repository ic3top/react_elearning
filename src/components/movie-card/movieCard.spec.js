import {render, screen, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import { MovieCard } from './MovieCard';

describe('MovieCard', () => {
    let mockStore;
    const middlewares = [thunk]
    const mockMovie = {
        release_date: 'release_date',
        title: 'title',
        genres: ['Genre'],
        poster_path: 'url',
        id: '1'
    };

    beforeEach(() => {
      mockStore = configureStore(middlewares);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should open delete dialog on clicking Delete button', async () => {
        render(
            <Provider store={mockStore({})}>
                <MovieCard movie={mockMovie} />
            </Provider>
        );

        fireEvent.mouseOver(screen.getByRole('listitem'));

        const threeDots = await screen.findByRole('img', { name: /three dots/i });
        fireEvent.click(threeDots);
        fireEvent.click(screen.getByRole('button', { name: /delete/i }));

        expect(screen.getByText(/Are you sure you want to delete/i)).toBeInTheDocument();
    });

    it('should open edit dialog on clicking Edit button', async () => {
        render(
            <Provider store={mockStore({})}>
                <MovieCard movie={mockMovie} />
            </Provider>
        );

        fireEvent.mouseOver(screen.getByRole('listitem'));

        const threeDots = await screen.findByRole('img', { name: /three dots/i });
        fireEvent.click(threeDots);
        fireEvent.click(screen.getByRole('button', { name: /edit/i }));

        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('should close options on clicking close img', async () => {
        render(
            <Provider store={mockStore({})}>
                <MovieCard movie={mockMovie} />
            </Provider>
        );

        fireEvent.mouseOver(screen.getByRole('listitem'));

        const threeDots = await screen.findByRole('img', { name: /three dots/i });

        fireEvent.click(threeDots);
        expect(screen.queryByRole('img', { name: /three dots/i })).toBeNull();

        fireEvent.click(screen.getByRole('img', { name: /x-mark/i }));
        expect(screen.getByRole('img', { name: /three dots/i })).toBeInTheDocument();
    });

    it('should call onClick when clicking the image', () => {
        const onClick = jest.fn();
        render(
            <Provider store={mockStore({})}>
                <MovieCard movie={mockMovie} onClick={onClick} />
            </Provider>
        );

        fireEvent.click(screen.getByRole('img', { name: 'movie'}));

        expect(onClick).toHaveBeenCalled();
    });
});
