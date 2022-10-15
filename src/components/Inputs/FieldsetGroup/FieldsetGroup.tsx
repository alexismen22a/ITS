import React, { cloneElement } from 'react';

import styles from './FieldsetInput.module.scss';
import { CapText } from 'src/utils/functions';
import RadioInput from 'src/components/Inputs/FieldsetGroup/RadioInput/RadioInput';

interface Props {
  name: string;
  legend?: string;
  className?: string;
  registerAs: boolean;
  children?: JSX.Element | Array<JSX.Element>;
}

function FieldsetGroup({ name, children, legend, className, registerAs, ...props }: Props) {
  const allowedChildren = [RadioInput];
  if (Array.isArray(children)) {
    if (children.find((child) => !allowedChildren.includes(child.type)))
      throw new Error(
        `The modal only accepts ${allowedChildren
          .map((el) => `<${el.name} />`)
          .join(' / ')} elements`
      );
  }

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
