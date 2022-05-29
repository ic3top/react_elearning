import { connect } from 'react-redux';
import { useFetchMovies } from '/hooks/useFetchMovies';

import { MovieCard } from '../movie-card/MovieCard';

import styles from './MovieList.module.scss';

export function MovieList({ movies, amount }) {
  const { setSearch } = useFetchMovies();

  const content = movies?.length
    ? movies.map((movie) => (
      <MovieCard
        key={movie?.id}
        movie={movie}
        onClick={() => setSearch({ movie: movie?.id })}
      />
    ))
    : (
      <p>
        Sorry, we couldn&apos;t find anything :(
        <style jsx>{'p { color: white; font-size: 24px  }'}</style>
      </p>
    );

  return (
    <>
      <p className={styles.moviesAmount}>
        <span>{amount || 0}</span>
        {' '}
        movies found
      </p>
      <div className={styles.movies}>
        {content}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  movies: state.movies.value,
  amount: state.movies.totalAmount,
});

export default connect(mapStateToProps)(MovieList);
