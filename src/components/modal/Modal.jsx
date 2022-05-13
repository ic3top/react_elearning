import closeIcon from '../../assets/close.svg';
import PropTypes from "prop-types";
import './modal.scss';
import {useEffect} from "react";

export const Modal = ({ show, onClose, children, title }) => {
  useEffect(() => {
    if (show) document.body.style.overflowY = 'hidden';
    return () => document.body.style.overflowY = 'auto';
  }, [show]);

  if (!show) return null;

  return (
    <div className="overlay">
      <div className="modal" role="dialog">
        <button className="modal__close" onClick={onClose}><img src={closeIcon} alt="x-mark"/></button>
        <div className="modal__title">{title}</div>
        {children}
      </div>
    </div>
  )
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string,
};
