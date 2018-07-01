import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DashboardCategory from '../dashboard-category/dashboard-category.component';
import AddCategory from './add-category.component';

import { initAdminDashboardCategories } from '../../actions/admin-dashboard-categories';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

    this.state = {
      modalOpen: false,
    };
  }

  componentDidMount() {
    // Because I'll be the only one using the admin section the local store
    // should be a guaranteed source of truth once the initial network request
    // has fetched the original data
    if (this.props.categories.length === 0) {
      axios.get('/api/admin/resource_site_categories').then(resp => this.props.initAdminDashboardCategories(resp.data), err => console.log(err));
    }
  }

  openModal() {
    this.setState({
      modalOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <AddCategory isOpen={this.state.modalOpen} close={this.closeModal} />
        <div className="add-btn-container">
          <button
            className="btn btn-outline-primary btn-small"
            onClick={this.openModal}
          >
            <i className="fas fa-plus" /> Add Item
          </button>
        </div>
        <div className="category-options">
          {
            this.props.categories.map(category => (
              <DashboardCategory key={category.id} category={category} match={this.props.match} />
            ))
          }
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  initAdminDashboardCategories: PropTypes.func.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({ categories: state.adminDashboardCategories });

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({ initAdminDashboardCategories }, dispatch),
)(Dashboard);
