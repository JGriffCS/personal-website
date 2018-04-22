import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AdminCategory extends React.Component {
  render () {
    return (
      <Link to={`${this.props.match.url}/${this.props.category.Value}`}>
        <div className="category">
          <div className="title">{this.props.category.Name}</div>
          <div className="visual">
            <i className={`fas ${this.props.category.Icon}`}></i>
          </div>
        </div>
      </Link>
    );
  }
}

AdminCategory.propTypes = {
  category: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Icon: PropTypes.string.isRequired,
    Value: PropTypes.string.isRequired
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default AdminCategory;