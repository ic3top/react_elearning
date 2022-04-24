import './delete-movie-modal.scss';
import {Modal} from "../../../../components/modal/Modal";
import {Button} from "../../../../components/button/Button";

export const DeleteMovieModal = ({ show, onClose, name }) => (
  <Modal className="delete-modal" show={show} onClose={onClose} title={'Delete Movie'}>
     <p className="delete-modal__message">
       Are you sure you want to delete {name}?
     </p>
    <div className="delete-modal__actions">
      <Button color="primary" className="delete-modal__btn">Confirm</Button>
    </div>
  </Modal>
)
