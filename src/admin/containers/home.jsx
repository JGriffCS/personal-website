import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddResourceCategory from '../components/home/add-resource-category/add-resource-category';
import DashboardItem from '../components/shared/dashboard-item/dashboard-item';
import DashboardSection from '../components/shared/dashboard-section/dashboard-section';
import withDeleteFunctionality from '../components/shared/removable-item/removable-item';

import { initAdminResourceCategories, removeAdminResourceCategory } from '../actions/admin-resource-categories';

const ResourceCategory = withDeleteFunctionality(DashboardItem);
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.resourceCategoryDelete = this.resourceCategoryDelete.bind(this);
  }
  componentDidMount() {
    // Because I'll be the only one using the admin section the local store
    // should be a guaranteed source of truth once the initial network request
    // has fetched the original data
    if (this.props.resourceCategories.length === 0) {
      axios.get('/api/admin/resource_site_categories')
        .then(resp => this.props.initAdminResourceCategories(resp.data), err => console.log(err));
    }
  }

  resourceCategoryDelete(id) {
    axios.delete(`/api/admin/resource_site_categories/${id}`).then(() => {
      this.props.removeAdminResourceCategory(id);
    }).catch(() => {

    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h3>Admin Functions</h3>
          <DashboardSection>
            <DashboardItem path="todos" icon="assignment" name="Todos" match={this.props.match} />
            <DashboardItem path="blog" icon="rss_feed" name="Blog Management" match={this.props.match} />
          </DashboardSection>
        </div>
        <div>
          <h3>Resource Categories</h3>
          <AddResourceCategory />
          <DashboardSection>
            {
              this.props.resourceCategories.map(category => (
                <ResourceCategory
                  key={category.id}
                  {...category}
                  deleteAction={this.resourceCategoryDelete}
                  deleteMessage="Remove Resource Category?"
                  match={this.props.match}
                />
              ))
            }
          </DashboardSection>
        </div>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  resourceCategories: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
  initAdminResourceCategories: PropTypes.func.isRequired,
  removeAdminResourceCategory: PropTypes.func.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({ resourceCategories: state.adminResourceCategories });

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({
    initAdminResourceCategories,
    removeAdminResourceCategory,
  }, dispatch),
)(Home);
