import './edit-movie.scss';
import {Modal} from "../../../../components/modal/Modal";
import {MovieForm} from "../../../../components/movie-form/MovieForm";

export const EditMovieModal = ({ show, onClose, movie }) => (
  <Modal show={show} onClose={onClose} title={'Add Movie'}>
    <div className="edit-movie">
      <div className="edit-movie__form">
        <MovieForm movie={movie} />
      </div>
    </div>
  </Modal>
)
