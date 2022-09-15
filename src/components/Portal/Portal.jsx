import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

function Portal({ children, to }) {
  return createPortal(children, document.querySelector(to));
}

Portal.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default Portal;
