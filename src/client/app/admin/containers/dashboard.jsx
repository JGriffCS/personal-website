import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddResourceCategory from '../components/dashboard/add-resource-category/add-resource-category';
import DashboardItem from '../components/dashboard/dashboard-item/dashboard-item.component';
import DashboardSection from '../components/dashboard/dashboard-section/dashboard-section';

import { initAdminResourceCategories } from '../../actions/admin-resource-categories';

class Dashboard extends React.Component {
  componentDidMount() {
    // Because I'll be the only one using the admin section the local store
    // should be a guaranteed source of truth once the initial network request
    // has fetched the original data
    if (this.props.resourceCategories.length === 0) {
      axios.get('/api/admin/resource_site_categories').then(resp => this.props.initAdminResourceCategories(resp.data), err => console.log(err));
    }
  }

  render() {
    return (
      <React.Fragment>
        <AddResourceCategory />
        <DashboardSection>
          {
            this.props.resourceCategories.map(category => (
              <DashboardItem key={category.id} category={category} match={this.props.match} />
            ))
          }
        </DashboardSection>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  resourceCategories: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
  initAdminResourceCategories: PropTypes.func.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({ resourceCategories: state.adminResourceCategories });

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({ initAdminResourceCategories }, dispatch),
)(Dashboard);
