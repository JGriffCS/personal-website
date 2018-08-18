import React from 'react';
import PropTypes from 'prop-types';

import './loading.pcss';

import loadingImage from '../../../assets/loading.svg';

// TODO: Fix error and timeout cases
const Loading = (props) => {
  if (props.error) {
    return <div>Error! <button onClick={props.retry}>Retry</button></div>;
  } else if (props.timedOut) {
    return <div>Taking a long time... <button onClick={props.retry}>Retry</button></div>;
  } else if (props.pastDelay) {
    return (
      <div className="loading-container">
        <div>
          Loading...
          <div className="loading-image-container">
            <img src={loadingImage} alt="Loading..." />
          </div>
        </div>
      </div>
    );
  }

  return null;
};

Loading.propTypes = {
  error: PropTypes.object, /* eslint-disable-line react/forbid-prop-types */
  pastDelay: PropTypes.bool.isRequired,
  retry: PropTypes.func.isRequired,
  timedOut: PropTypes.bool.isRequired,
};

Loading.defaultProps = {
  error: null,
};

export default Loading;
