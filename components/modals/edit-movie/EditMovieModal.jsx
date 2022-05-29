import { connect } from 'react-redux';
import styles from './EditMovie.module.scss';

import { updateMovie } from '/store/movies/moviesAsyncActions';

import { Modal } from '../Modal';
import { MovieForm } from '../../movie-form/MovieForm';

export function EditMovieModal({
  show, onClose, movie, onSubmit,
}) {
  return (
    <Modal show={show} onClose={onClose} title="Edit Movie">
      <div className={styles.editMovie}>
        <div className={styles.editMovie__form}>
          <MovieForm movie={movie} onSubmit={onSubmit} />
        </div>
      </div>
    </Modal>
  );
}

const mapDispatchToProps = (dispatch, props) => ({
  ...props,
  onSubmit: (movie) => {
    dispatch(updateMovie(movie));
    props.onClose();
  },
});

export default connect(null, mapDispatchToProps)(EditMovieModal);
