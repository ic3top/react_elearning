import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { MovieList } from './MovieList';

describe('MovieList', () => {
  const movies = [{
    release_date: 'release_date',
    title: 'title',
    genres: ['Action'],
    poster_path: 'poster_path',
    id: 'id1',
  },
  {
    release_date: 'release_date',
    title: 'title',
    genres: ['Action'],
    poster_path: 'poster_path',
    id: 'id2',
  },
  ];

  let mockStore;

  beforeEach(() => {
    mockStore = configureStore();
  });

  it('renders correctly all movies', () => {
    const tree = renderer.create(
      <Provider store={mockStore({})}>
        <MovieList movies={movies} amount={movies.length} />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
