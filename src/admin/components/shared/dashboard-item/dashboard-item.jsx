import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './dashboard-item.pcss';

function DashboardItem(props) {
  return (
    <Link to={`${props.match.url}/${props.path}`}>
      <div className="dashboard-item">
        <div className="title">{props.name}</div>
        <div className="visual">
          <i className="material-icons">{props.icon}</i>
        </div>
      </div>
    </Link>
  );
}

DashboardItem.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default DashboardItem;
