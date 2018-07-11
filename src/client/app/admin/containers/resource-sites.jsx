import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ResourceSite from '../resource-site/resource-site.component';
import AddResourceSite from '../components/resource-sites/add-resource-site/add-resource-site';

import { initAdminResourceSites } from '../../actions/admin-resource-sites';

class ResourceSites extends React.Component {
  componentDidMount() {
    // Because I'll be the only one using the admin section the local store
    // should be a guaranteed source of truth once the initial network request
    // has fetched the original data
    if (this.props.sites.length === 0) {
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
        <div className="action-items-container">
          {
            this.props.sites.map(site => (
              <ResourceSite item={site} key={site.id} />
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
  dispatch => bindActionCreators({ initAdminResourceSites }, dispatch),
)(ResourceSites);
