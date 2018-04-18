import React from 'react';

import ActionItem from '../shared/action-item/action-item.component';

// TODO: What is a pure component?!?!
class Watch extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      sites: [
        { id: 1, name: 'Hulu', imageUrl: 'hulu.com', link: 'https://www.hulu.com' },
        { id: 2, name: 'Netflix', imageUrl: 'netflix.com', link: 'https://www.netflix.com' },
        { id: 3, name: 'Crunchyroll', imageUrl: 'crunchyroll.com', link: 'https://www.crunchyroll.com' },
        { id: 4, name: 'Youtube', imageUrl: 'youtube.com', link: 'https://www.youtube.com' },
        { id: 5, name: 'Twitch', imageUrl: 'twitch.com', link: 'https://www.twitch.com' }
      ]
    }
  }
  render () {
    return (
      <div className="action-items-container">
        {
          this.state.sites.map((site) => {
            return (
              <ActionItem item={site} key={site.id}></ActionItem>
            )
          })
        }
      </div>
    );
  }
}

export default Watch;