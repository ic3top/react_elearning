import {connect} from "react-redux";

import './add-movie-modal.scss';
import {Modal} from "../../../../components/modal/Modal";
import {MovieForm} from "../../../../components/movie-form/MovieForm";
import {createMovie} from '../../../../store/movies/moviesAsyncActions';

export const AddMovieModal = ({ show, onClose, onSubmit }) => (
  <Modal show={show} onClose={onClose} title={'Add Movie'}>
    <div className="add-movie">
      <div className="add-movie__form">
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
