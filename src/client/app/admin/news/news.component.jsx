import React from 'react';

import ActionItem from '../shared/action-item/action-item.component';

// TODO: What is a pure component?!?!
class News extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      sites: [
        { id: 1, name: 'CNN', imageUrl: 'cnn.com', link: 'https://edition.cnn.com/' },
        { id: 2, name: 'Japan Today', imageUrl: 'japantoday.com', link: 'https://japantoday.com/' }
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

export default News;