import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

import { useAppSelector, useAppDispatch } from 'src/hooks/redux';
import Portal from 'src/components/Portal/Portal';
import { hide } from 'src/components/Modal/modalSlice';
import styles from 'src/components/Modal/Modal.module.scss';
import ErrorBoundary from 'src/components/ErrorBoundaries/ErrorBoundaries';
import ModalAddBtn from 'src/components/Modal/ModalAddBtn/ModalAddBtn';

interface ModalProps {
  children: JSX.Element;
}

function Modal({ children }: ModalProps): JSX.Element | null {
  const show = useAppSelector((state) => state.modal.displayed);
  const dispatch = useAppDispatch();
  if (!show) return null;

  const allowedChildren = [ModalAddBtn];
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
