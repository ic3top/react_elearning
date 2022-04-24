import './add-movie-modal.scss';
import {Modal} from "../../../../components/modal/Modal";
import {MovieForm} from "../../../../components/movie-form/MovieForm";

export const AddMovieModal = ({ show, onClose }) => (
  <Modal show={show} onClose={onClose} title={'Add Movie'}>
    <div className="add-movie">
      <div className="add-movie__form">
        <MovieForm />
      </div>
    </div>
  </Modal>
)
