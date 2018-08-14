import React from 'react';
import PropTypes from 'prop-types';

import './loading.pcss';

// TODO: Come back and style this
const Loading = (props) => {
  if (props.error) {
    return <div>Error! <button onClick={props.retry}>Retry</button></div>;
  } else if (props.timedOut) {
    return <div>Taking a long time... <button onClick={props.retry}>Retry</button></div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  }

  return null;
};

Loading.propTypes = {
  error: PropTypes.object.isRequired, /* eslint-disable-line react/forbid-prop-types */
  pastDelay: PropTypes.bool.isRequired,
  retry: PropTypes.func.isRequired,
  timedOut: PropTypes.bool.isRequired,
};

export default Loading;
