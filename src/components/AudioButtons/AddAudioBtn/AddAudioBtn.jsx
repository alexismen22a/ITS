import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './AddAudioBtn.module.scss';
import Modal from '../../Modal/Modal';
import AddBtnModal from '../../Modal/AddBtnModal/AddBtnModal';
import ErrorBoundary from '../../ErrorBoundaries/ErrorBoundaries';
import { display } from '../../Modal/modalSlice';

export default function AddAudioButton() {
  const dispatch = useDispatch();

  function clickHandler(e) {
    e.preventDefault();
    dispatch(display());
  }

  return (
    <>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={clickHandler}>
          +
        </button>
      </div>
      <Modal>
        <ErrorBoundary>
          <AddBtnModal />
        </ErrorBoundary>
      </Modal>
    </>
  );
}
