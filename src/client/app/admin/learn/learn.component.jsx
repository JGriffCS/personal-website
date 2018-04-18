import React from 'react';

import ActionItem from '../shared/action-item/action-item.component';

// TODO: What is a pure component?!?!
class Learn extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      sites: [
        { id: 1, name: 'Medium: Daily JS', imageUrl: 'medium.com', link: 'https://medium.com/dailyjs' },
        { id: 2, name: 'Echo JS', imageUrl: 'echojs.com', link: 'https://www.echojs.com' },
        { id: 3, name: 'quirksmode', imageUrl: 'quirksmode.org', link: 'https://www.quirksmode.org' },
        { id: 4, name: 'CSS Wizardry', imageUrl: 'csswizardry.com', link: 'https://csswizardry.com/' },
        { id: 5, name: 'React Blog', imageUrl: 'reactjs.org', link: 'https://reactjs.org/blog' },
        { id: 6, name: 'Chrome Updates', imageUrl: 'developers.google.com', link: 'https://developers.google.com/web/updates/' },
        { id: 7, name: 'StackSkills', imageUrl: 'stackskills.com', link: 'https://stackskills.com/' },
        { id: 8, name: 'Hackernoon', imageUrl: 'hackernoon.com', link: 'https://hackernoon.com/' },
        { id: 9, name: 'VueJS News', imageUrl: 'vuejs.org', link: 'https://news.vuejs.org/' }
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

export default Learn;