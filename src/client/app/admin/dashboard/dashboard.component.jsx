import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DashboardCategory from '../dashboard-item/dashboard-item.component';
import AddCategory from './add-category.component';

import { initAdminDashboardCategories } from '../../actions/admin-dashboard-categories';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Because I'll be the only one using the admin section the local store
    // should be a guaranteed source of truth once the initial network request
    // has fetched the original data
    if (this.props.categories.length === 0) {
      axios.get('/api/admin/resource_site_categories').then(resp => this.props.initAdminDashboardCategories(resp.data), err => console.log(err));
    }
  }

  render() {
    return (
      <React.Fragment>
        <AddCategory />
        <div className="dashboard-items-container">
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
