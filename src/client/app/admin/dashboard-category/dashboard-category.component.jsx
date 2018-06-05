import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeAdminDashboardCategory } from '../../actions/admin-dashboard-categories';

import RemoveCategory from './remove-category.component';

class DashboardCategory extends React.Component {
  constructor (props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      modalOpen: false,
    };
  }

  openModal (e) {
    e.preventDefault();

    this.setState({
      modalOpen: true
    });
  }

  closeModal () {
    this.setState({
      modalOpen: false
    });
  }

  render () {
    return (
      <React.Fragment>
        <RemoveCategory category={this.props.category} isOpen={this.state.modalOpen} close={this.closeModal}></RemoveCategory>
        <Link to={`${this.props.match.url}/${this.props.category.value}`}>
          <div className="category">
            <div className="remove" onClick={this.openModal}>
              <i className="fas fa-trash-alt"></i>
            </div>
            <div className="title">{this.props.category.name}</div>
            <div className="visual">
              <i className={`fas ${this.props.category.icon}`}></i>
            </div>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

DashboardCategory.propTypes = {
  category: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(null, dispatch => bindActionCreators({ removeAdminDashboardCategory }, dispatch))(DashboardCategory);