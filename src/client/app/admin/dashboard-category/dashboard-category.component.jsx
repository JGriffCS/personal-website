import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeAdminDashboardCategory } from '../../actions/admin-dashboard-categories';

class DashboardCategory extends React.Component {
  constructor (props) {
    super(props);

    this.removeCategory = this.removeCategory.bind(this);
  }

  removeCategory (e) {
    e.preventDefault();
    console.log(this.props);
  }

  render () {
    return (
      <Link to={`${this.props.match.url}/${this.props.category.value}`}>
        <div className="category">
          <div className="remove" onClick={this.removeCategory}>
            <i className="fas fa-trash-alt"></i>
          </div>
          <div className="title">{this.props.category.name}</div>
          <div className="visual">
            <i className={`fas ${this.props.category.icon}`}></i>
          </div>
        </div>
      </Link>
    );
  }
}

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

export default connect(null, dispatch => bindActionCreators({ removeAdminDashboardCategory }, dispatch))(DashboardCategory);