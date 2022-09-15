import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from 'react-hook-form';


import styles from "./RadioInput.module.scss";
import { CapText } from "../../../../utils/functions";

function RadioInput({
    id,
    registerAs,
  children = "Add a label attribute",
  className = '',
  ...props
}) {
    const {register} = useFormContext()

  return (
    <div className={`${styles.container} ${className}`}>
      <input type="radio" id={id} {...register(registerAs)} {...props} />
      <label htmlFor={id}>{CapText(children)}</label>
    </div>
  );
}

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  registerAs: PropTypes.string.isRequired,
  name: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string,
};

export default RadioInput;
