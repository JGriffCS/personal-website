import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AdminCategory extends React.Component {
  render () {
    return (
      <Link to={`${this.props.match.url}${this.props.category.path}`}>
        <div className="category">
          <div className="title">{this.props.category.title}</div>
          <div className="visual">
            <i className={`fas ${this.props.category.icon}`}></i>
          </div>
        </div>
      </Link>
    );
  }
}

AdminCategory.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default AdminCategory;