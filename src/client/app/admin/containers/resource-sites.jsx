import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ResourceSite from '../components/resource-sites/resource-site/resource-site';
import AddResourceSite from '../components/resource-sites/add-resource-site/add-resource-site';
import withDeleteFunctionality from '../components/dashboard/dashboard-item/removable-item';

import { initAdminResourceSites, removeAdminResourceSite } from '../actions/admin-resource-sites';

const RemovableResourceSite = withDeleteFunctionality(ResourceSite);
class ResourceSites extends React.Component {
  componentDidMount() {
    // Because I'll be the only one using the admin section the local store
    // should be a guaranteed source of truth once the initial network request
    // has fetched the original data
    if (this.props.sites.length === 0) {
      console.log(this.props.siteCategory);
      axios.get(`/api/admin/resource_sites/${this.props.siteCategory}`).then(
        resp => this.props.initAdminResourceSites(this.props.siteCategory, resp.data)
        , err => console.log(err),
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <AddResourceSite
          id={this.props.siteCategory}
        />
        <div className="resource-sites-container">
          {
            this.props.sites.map(site => (
              <RemovableResourceSite item={site} key={site.id} deleteAction={() => console.log('hi')} />
            ))
          }
        </div>
      </React.Fragment>
    );
  }
}

ResourceSites.propTypes = {
  initAdminResourceSites: PropTypes.func.isRequired,
  siteCategory: PropTypes.number.isRequired,
  sites: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    site_category_id: PropTypes.number.isRequired,
  })).isRequired,
};

const mapStateToProps = (state, props) => ({
  sites: state.adminResourceSites[props.siteCategory] || [],
});

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({ initAdminResourceSites, removeAdminResourceSite }, dispatch),
)(ResourceSites);
