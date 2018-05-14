import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ResourceSite from '../resource-site/resource-site.component';

// TODO: What is a pure component?!?!
class ResourceSites extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      sites: []
    }
  }

  componentDidMount () {
    axios.get(`/api/admin/resource_sites/${this.props.siteCategory}`).then(resp => this.setState({ sites: resp.data }), err => console.log(err));
  }

  render () {
    return (
      <div className="action-items-container">
        {
          this.state.sites.map((site) => {
            return (
              <ResourceSite item={site} key={site.id}></ResourceSite>
            )
          })
        }
      </div>
    );
  }
}

ResourceSites.propTypes = {
  siteCategory: PropTypes.number.isRequired
};

export default ResourceSites;