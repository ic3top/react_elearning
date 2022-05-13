import React from 'react'
import {render, screen, waitFor, fireEvent } from '@testing-library/react'

import { MovieForm } from './MovieForm';

describe('MovieForm', () => {
    const mockMovie = {
        title: 'title',
        release_date: '2022-01-04',
        poster_path: 'https://url.com',
        vote_average: 4,
        genres: [{ value: 'genre' }],
        runtime: 111,
        overview: 'Overview',
        tagline: 'tagline'
    }
    const handleSubmit = jest.fn();

    it('should prefill values when movie provided', async () => {
        render(<MovieForm onSubmit={handleSubmit} movie={mockMovie} />)

        await fireEvent.click(screen.getByRole('button', {name: /submit/i}))

        await waitFor(() =>
          expect(handleSubmit).toHaveBeenCalledWith({
            ...mockMovie,
            release_date: new Date(mockMovie.release_date).toLocaleDateString()
          }),
        )
    });

});
