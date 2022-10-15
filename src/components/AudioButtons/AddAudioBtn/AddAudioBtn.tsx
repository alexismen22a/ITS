import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import styles from 'src/components/AudioButtons/AddAudioBtn/AddAudioBtn.module.scss';
import Modal from 'src/components/Modal/Modal';
import ModalAddBtn from 'src/components/Modal/ModalAddBtn/ModalAddBtn';
import { display } from 'src/components/Modal/modalSlice';
import { selectOptions } from 'src/components/Options/OptionsSlice';

export default function AddAudioButton(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const optionsActive = useAppSelector(selectOptions);
  const id = 'AddAudioButton';

  if (optionsActive) return null;
  return (
    <>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={() => dispatch(display(id))}>
          <PlusIcon />
        </button>
      </div>
      <Modal which={id}>
        <ModalAddBtn />
      </Modal>
    </>
  );
}
