import React from 'react';
import PropTypes from 'prop-types';

import './alert.pcss';

const Alert = props => (
  <div className={`alert alert-${props.type}`}>
    { props.message }
  </div>
);


Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warn', 'info']).isRequired,
  message: PropTypes.string.isRequired,
};

export default Alert;
