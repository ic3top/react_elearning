import styles from './Modal.module.scss';
import { useEffect } from "react";

import closeIcon from '/public/img/close.svg';
import Image from 'next/image';

export const Modal = ({ show, onClose, children, title }) => {
  useEffect(() => {
    if (show) document.body.style.overflowY = 'hidden';
    return () => document.body.style.overflowY = 'auto';
  }, [show]);

  if (!show) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} role="dialog">
        <button className={styles.close} onClick={onClose}>
          <Image width={20} height={20} src={closeIcon} alt="x-mark" />
        </button>
        <div className={styles.title}>{title}</div>
        {children}
      </div>
    </div>
  )
};
