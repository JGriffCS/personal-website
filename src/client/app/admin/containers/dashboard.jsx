import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddResourceCategory from '../components/dashboard/add-resource-category/add-resource-category';
import DashboardCategory from '../dashboard-item/dashboard-item.component';
import DashboardSection from '../components/dashboard/dashboard-section/dashboard-section';

import { initAdminDashboardCategories } from '../../actions/admin-dashboard-categories';

class Dashboard extends React.Component {
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
        <AddResourceCategory />
        <DashboardSection>
          {
            this.props.categories.map(category => (
              <DashboardCategory key={category.id} category={category} match={this.props.match} />
            ))
          }
        </DashboardSection>
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
