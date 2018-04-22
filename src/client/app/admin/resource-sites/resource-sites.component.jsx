import React from 'react';
import axios from 'axios';

import ActionItem from '../resource-site/resource-site.component';

// TODO: What is a pure component?!?!
class ResourceSites extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      sites: []
    }
  }

  componentDidMount () {
    axios.get(`/admin/resource_sites/${this.props.siteCategory}`).then(resp => this.setState({ sites: resp.data }));
  }

  render () {
    return (
      <div className="action-items-container">
        {
          this.state.sites.map((site) => {
            return (
              <ActionItem item={site} key={site.ID}></ActionItem>
            )
          })
        }
      </div>
    );
  }
}

export default ResourceSites;