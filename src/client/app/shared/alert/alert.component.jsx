import React from 'react';
import PropTypes from 'prop-types';

const Alert = (props) => {
  return (
    <div className={`alert alert-${props.type}`}>
      { props.message }
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warn', 'info']).isRequired,
  message: PropTypes.string.isRequired
};

export default Alert;