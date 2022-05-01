import {connect} from "react-redux";
import './edit-movie.scss';
import {updateMovie} from '../../../../store/movies/moviesAsyncActions';
import {Modal} from "../../../../components/modal/Modal";
import {MovieForm} from "../../../../components/movie-form/MovieForm";

export const EditMovieModal = ({ show, onClose, movie, onSubmit }) => (
  <Modal show={show} onClose={onClose} title={'Edit Movie'}>
    <div className="edit-movie">
      <div className="edit-movie__form">
        <MovieForm movie={movie} onSubmit={onSubmit} />
      </div>
    </div>
  </Modal>
);

const mapDispatchToProps = (dispatch, props) => {
  return {
    ...props,
    onSubmit: (movie) => {
      dispatch(updateMovie(movie));
      props.onClose();
    },
  }
}

export default connect(null, mapDispatchToProps)(EditMovieModal);
