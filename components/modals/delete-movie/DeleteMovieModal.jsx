import { connect } from 'react-redux';
import { deleteMovieById } from '/store/movies/moviesAsyncActions';

import styles from './DeleteMovie.module.scss';

import { Modal } from '../Modal';
import { Button } from '../../button/Button';

export function DeleteMovieModal({
  show, onClose, name, onConfirm,
}) {
  return (
    <Modal className={styles.deleteModal} show={show} onClose={onClose} title="Delete Movie">
      <p className={styles.deleteModal__message}>
        Are you sure you want to delete
        {' '}
        {name}
        ?
      </p>
      <div className={styles.deleteModal__actions}>
        <Button color="primary" className={styles.deleteModal__btn} onClick={onConfirm}>Confirm</Button>
      </div>
    </Modal>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  onConfirm: () => {
    dispatch(deleteMovieById(ownProps.id));
    ownProps.onClose();
  },
});

export default connect(null, mapDispatchToProps)(DeleteMovieModal);
