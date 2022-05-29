import '../styles/globals.scss';

import { Provider } from 'react-redux';

import * as moviesApi from '/api/moviesApi';
import { initializeStore, useStore } from '/store/store';
import { setMovies } from '/store/movies/moviesActions';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

App.getInitialProps = async (context) => {
  const store = initializeStore({});
  const { dispatch } = store;

  const { query } = context.ctx;
  const props = {};
  const movieId = query.movie;
  const params = {
    sortBy: query.sortBy || 'release_date',
    searchBy: query.searchBy || 'title',
    search: query.search || '',
  };

  if (query.genre && query.genre !== 'ALL') params.filter = query.genre;

  props.response = await moviesApi.getMoviesList(params);
  dispatch(setMovies({ movies: props.response.data, totalAmount: props.response.totalAmount }));

  // TODO: cache response
  if (movieId) {
    props.movie = await moviesApi.getMovieById(movieId);
  }

  props.initialReduxState = store.getState();
  return { pageProps: props };
};
