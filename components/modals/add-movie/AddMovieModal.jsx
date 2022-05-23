import styles from './AddMovie.module.scss';

import { connect } from "react-redux";
import { createMovie } from '/store/movies/moviesAsyncActions';

import { Modal } from "../Modal";
import { MovieForm } from "../../movie-form/MovieForm";

export const AddMovieModal = ({ show, onClose, onSubmit }) => (
  <Modal show={show} onClose={onClose} title={'Add Movie'}>
    <div className={styles["add-movie"]}>
      <div className={styles["add-movie__form"]}>
        <MovieForm onSubmit={onSubmit} />
      </div>
    </div>
  </Modal>
);

const mapDispatchToProps = (dispatch, props) => {
  return {
    ...props,
    onSubmit: (movie) => {
      dispatch(createMovie(movie))
      props.onClose();
    }
  }
}

export default connect(null, mapDispatchToProps)(AddMovieModal);
