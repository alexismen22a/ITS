import React from 'react';

import styles from 'src/components/Inputs/SubmitButton/SubmitButton.module.scss';
import { CapText } from 'src/utils/functions';

type SubmitButtonProps = {
  children: string;
  type: 'primary' | 'secondary';
  className?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const SubmitButton: (props: SubmitButtonProps) => JSX.Element = function ({
  children,
  type,
  className,
}) {
  return (
    <input
      type="submit"
      value={CapText(children)}
      className={`${styles.submit} ${styles[type]} ` + className ?? ''}
    />
  );
};

export default SubmitButton;
