import React from 'react';
import axios from 'axios';

import ActionItem from '../shared/action-item/action-item.component';

// TODO: What is a pure component?!?!
class Watch extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      sites: []
    }
  }

  componentDidMount () {
    axios.get('/admin/action_items/2').then(resp => this.setState({ sites: resp.data }));
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

export default Watch;