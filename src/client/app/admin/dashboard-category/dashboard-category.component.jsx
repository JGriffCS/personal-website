import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DashboardCategory  = (props) => {
  return (
    <Link to={`${props.match.url}/${props.category.value}`}>
      <div className="category">
        <div className="remove">
          <i className="fas fa-trash-alt"></i>
        </div>
        <div className="title">{props.category.name}</div>
        <div className="visual">
          <i className={`fas ${props.category.icon}`}></i>
        </div>
      </div>
    </Link>
  );
};

DashboardCategory.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default DashboardCategory;