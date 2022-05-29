import { connect } from 'react-redux';
import styles from './AddMovie.module.scss';

import { createMovie } from '/store/movies/moviesAsyncActions';

import { Modal } from '../Modal';
import { MovieForm } from '../../movie-form/MovieForm';

export function AddMovieModal({ show, onClose, onSubmit }) {
  return (
    <Modal show={show} onClose={onClose} title="Add Movie">
      <div className={styles['add-movie']}>
        <div className={styles['add-movie__form']}>
          <MovieForm onSubmit={onSubmit} />
        </div>
      </div>
    </Modal>
  );
}

const mapDispatchToProps = (dispatch, props) => ({
  ...props,
  onSubmit: (movie) => {
    dispatch(createMovie(movie));
    props.onClose();
  },
});

export default connect(null, mapDispatchToProps)(AddMovieModal);
