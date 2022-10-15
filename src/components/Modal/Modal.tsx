import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

import { useAppSelector, useAppDispatch } from 'src/hooks/redux';
import Portal from 'src/components/Portal/Portal';
import { hide, selectModalDisplay, selectModalId } from 'src/components/Modal/modalSlice';
import styles from 'src/components/Modal/Modal.module.scss';
import ErrorBoundary from 'src/components/ErrorBoundaries/ErrorBoundaries';
import ModalAddBtn from 'src/components/Modal/ModalAddBtn/ModalAddBtn';
import ModalEditBtn from 'src/components/Modal/ModalEditBtn/ModalEditBtn';

interface ModalProps {
  children: JSX.Element;
  which: string;
}

function Modal({ children, which }: ModalProps): JSX.Element | null {
  const show = useAppSelector(selectModalDisplay);
  const whichOne = useAppSelector(selectModalId);
  const dispatch = useAppDispatch();
  if (!show) return null;
  if (whichOne !== which) return null;

  const allowedChildren = [ModalAddBtn, ModalEditBtn];
  if (!allowedChildren.find((el) => el === children.type))
    throw new Error(
      `The modal only accepts ${allowedChildren.map((el) => `<${el.name} />`).join(' / ')} elements`
    );

  return (
    <Portal to="#modal">
      <div className={styles.modal}>
        <button className={styles.exit} onClick={() => dispatch(hide())}>
          <XMarkIcon />
        </button>
        <ErrorBoundary>{children}</ErrorBoundary>
      </div>
      <div className={styles.overlay} onClick={() => dispatch(hide())} />
    </Portal>
  );
}

export default Modal;
