import React, { cloneElement, ReactElement } from 'react';

import styles from './FieldsetInput.module.scss';
import { CapText } from 'src/utils/functions';
import type { RadioInputProps } from 'src/components/Inputs/FieldsetGroup/RadioInput/RadioInput';

interface Props {
  name: string;
  legend?: string;
  className?: string;
  registerAs: boolean;
  children?: ReactElement<RadioInputProps> | Array<ReactElement<RadioInputProps>>;
}

function FieldsetGroup({ name, children, legend, className, registerAs, ...props }: Props) {
  return (
    <fieldset className={`${styles.container} ${className ? className : ''}`} {...props}>
      {legend && (
        <legend>
          <>{CapText(legend)}</>
        </legend>
      )}
      {Array.isArray(children)
        ? children.map((child, index) =>
            cloneElement(child, { name: name, registerAs, key: `${index}-input-child` })
          )
        : children && cloneElement(children, { name: name, registerAs })}
    </fieldset>
  );
}

export default FieldsetGroup;
