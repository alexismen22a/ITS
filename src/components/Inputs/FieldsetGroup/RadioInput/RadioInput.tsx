import React from 'react';
import { useFormContext } from 'react-hook-form';

import styles from './RadioInput.module.scss';
import { CapText } from '../../../../utils/functions';

interface RadioInputProps {
  id: string;
  value: string;
  registerAs?: boolean;
  name?: string;
  children?: string;
  className?: string;
  [x: string]: any;
}

export default function RadioInput({
  id,
  name,
  registerAs,
  children,
  className,
  ...props
}: RadioInputProps): JSX.Element {
  const { register } = useFormContext();

  return (
    <div className={`${styles.container} ${className}`}>
      <input
        type="radio"
        id={id}
        {...(registerAs && name ? register(name, { required: true }) : { name: name })}
        {...props}
      />
      {children && (
        <label htmlFor={id}>
          <>{CapText(children)}</>
        </label>
      )}
    </div>
  );
}
