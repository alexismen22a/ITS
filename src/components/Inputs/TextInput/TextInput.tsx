import React from 'react';
import { useFormContext } from 'react-hook-form';

import styles from './TextInput.module.scss';
import { CapText } from '../../../utils/functions';

interface TextInputProps {
  id: string;
  registerAs?: string;
  className?: string;
  label?: string;
  placeholder?: string;
  type?: 'primary' | 'secondary';
  [x: string]: any;
}

interface ConditionalAttributes {
  placeholder?: string;
  [x: string]: any;
}

function TextInput({
  id,
  registerAs,
  className,
  label,
  placeholder,
  type = 'primary',
  ...props
}: TextInputProps) {
  const { register } = useFormContext();
  let conditionalAttributes: ConditionalAttributes = {};

  if (placeholder) conditionalAttributes.placeholder = CapText(placeholder);
  if (registerAs)
    conditionalAttributes = {
      ...conditionalAttributes,
      ...register(registerAs, { required: true }),
    };
  else conditionalAttributes.name = id;

  return (
    <div className={`${className} ${styles.container}`}>
      {label && (
        <label htmlFor={id} className={styles.labelInput}>
          <>{CapText(label)}</>
        </label>
      )}
      <input
        type="text"
        id={id}
        className={`${styles.textInput} ${styles[type]}`}
        {...conditionalAttributes}
        {...props}
      />
    </div>
  );
}

export default TextInput;
