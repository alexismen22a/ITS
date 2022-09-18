import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

import { useAppDispatch } from 'src/hooks/redux';
import styles from './AddAudioBtn.module.scss';
import Modal from '../../Modal/Modal';
import ModalAddBtn from '../../Modal/ModalAddBtn/ModalAddBtn';
import { display } from '../../Modal/modalSlice';

export default function AddAudioButton() {
  const dispatch = useAppDispatch();

  function openModal() {
    dispatch(display());
  }

  return (
    <>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={openModal}>
          <PlusIcon />
        </button>
      </div>
      <Modal>
        <ModalAddBtn />
      </Modal>
    </>
  );
}
