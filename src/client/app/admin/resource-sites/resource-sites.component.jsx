import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ResourceSite from '../resource-site/resource-site.component';
import AddResourceSite from './add-resource-site.component';

class ResourceSites extends React.Component {
  constructor (props) {
    super(props);

    console.log(props);

    this.state = {
      sites: []
    }
  }

  componentDidMount () {
    axios.get(`/api/admin/resource_sites/${this.props.siteCategory}`).then(resp => this.setState({ sites: resp.data }), err => console.log(err));
  }

  render () {
    return (
      <React.Fragment>
        <AddResourceSite id={this.props.siteCategory}></AddResourceSite>
        <div className="action-items-container">
          {
            this.state.sites.map((site) => {
              return (
                <ResourceSite item={site} key={site.id}></ResourceSite>
              )
            })
          }
        </div>
      </React.Fragment>
    );
  }
}

ResourceSites.propTypes = {
  siteCategory: PropTypes.number.isRequired
};

export default ResourceSites;