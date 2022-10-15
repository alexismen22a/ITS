import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

import { useAppSelector, useAppDispatch } from 'src/hooks/redux';
import styles from 'src/components/AudioButtons/AudioBtn/AudioBtn.module.scss';
import Modal from 'src/components/Modal/Modal';
import ModalEditBtn from 'src/components/Modal/ModalEditBtn/ModalEditBtn';
import { display } from 'src/components/Modal/modalSlice';
import { selectOptions } from 'src/components/Options/OptionsSlice';
import { deleteButton } from 'src/components/AudioButtons/audioButtonsSlice';
import type { Button } from 'src/types';
interface Props {
  btn: Button;
  alt?: string;
}

export default function AudioBtn({ btn, alt }: Props) {
  const optionsActive = useAppSelector(selectOptions);
  const dispatch = useAppDispatch();
  const [buttonError, setButtonsError] = useState(false);
  const { id, name, img: imgUrl } = btn;

  return (
    <div className={styles.container}>
      <button className={styles.audioButton} disabled={buttonError}>
        {optionsActive && !buttonError && (
          <>
            <img
              className={styles.btnImageOptions}
              src={window.location.origin + '/gallery/settings.png'}
              alt={alt ?? imgUrl}
              onClick={() => dispatch(display(id))}
            />
            <div className={styles.deleteBtn} onClick={() => dispatch(deleteButton(id))}>
              <XMarkIcon />
            </div>
          </>
        )}

        {!buttonError ? (
          <>
            <img
              src={window.location.origin + '/gallery/' + imgUrl}
              alt={alt ?? imgUrl}
              className={styles.btnImage}
              onError={() => setButtonsError(true)}
            />
          </>
        ) : (
          'Fatal Error'
        )}
      </button>
      <h2 className={styles.title}>{name}</h2>
      <Modal which={id}>
        <ModalEditBtn id={id} />
      </Modal>
    </div>
  );
}
