import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from 'react-hook-form';


import styles from "./TextInput.module.scss";
import { CapText } from "../../../utils/functions";

function TextInput({
  id,
  registerAs,
  className,
  label = "Add a label attribute",
  ...props
}) {
    const {register} = useFormContext();

  return (
    <div className={`${className} ${styles.container}`}>
      <label htmlFor={id} className={styles.labelInput}>
        {CapText(label)}
      </label>
      <input type="text" id={id} className={styles.textInput} {...register(registerAs, { required: true })} {...props} />
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  registerAs: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
};

export default TextInput;
