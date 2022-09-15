import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import Portal from '../Portal/Portal';
import { hide } from './modalSlice';
import styles from './Modal.module.scss';

function Modal({ children, ...props }) {
  const show = useSelector((state) => state.modal.displayed);
  const dispatch = useDispatch();
  if (!show) return null;

  return (
    <>
      <Portal to="#modal">
        <div className={styles.modal} {...props}>
          {children}
        </div>
        <div className={styles.overlay} onClick={() => dispatch(hide())}></div>
      </Portal>
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Modal;
