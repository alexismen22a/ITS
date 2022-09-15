import React from "react";
import PropTypes from "prop-types";

import styles from "./Container.module.scss";

function Container({ children }) {
  return <div className={styles.mainContainer}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Container;
