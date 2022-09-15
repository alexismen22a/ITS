import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

import styles from './FieldsetInput.module.scss';
import { CapText } from '../../../utils/functions';

function FieldsetGroup({ id, children, legend = 'Add a legend attribute', className, ...props }) {
    return (
    <fieldset id={id} className={`${styles.container} ${className}`} {...props}>
      <legend>{CapText(legend)}</legend>
      { Array.isArray(children)
        ? 
            children.map((child, index) => cloneElement(child, {name: id,  key: `${index}-input-child`}))
        :
            cloneElement(children, { name: id })
      }
    </fieldset>
  );
}

FieldsetGroup.propTypes = {
  id: PropTypes.string.isRequired,
  legend: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default FieldsetGroup;
