import './delete-movie-modal.scss';
import {Modal} from "../../../../components/modal/Modal";
import {Button} from "../../../../components/button/Button";
import {deleteMovieById} from '../../../../store/movies/moviesAsyncActions';
import {connect} from "react-redux";

export const DeleteMovieModal = ({ show, onClose, name, onConfirm }) => (
  <Modal className="delete-modal" show={show} onClose={onClose} title={'Delete Movie'}>
     <p className="delete-modal__message">
       Are you sure you want to delete {name}?
     </p>
    <div className="delete-modal__actions">
      <Button color="primary" className="delete-modal__btn" onClick={onConfirm}>Confirm</Button>
    </div>
  </Modal>
)

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    onConfirm: () => {
      dispatch(deleteMovieById(ownProps.id));
      ownProps.onClose();
    },
  }
}

export default connect(null, mapDispatchToProps )(DeleteMovieModal);
