import React from 'react';

import ActionItem from '../shared/action-item/action-item.component';

// TODO: What is a pure component?!?!
class Practice extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      sites: [
        { id: 1, name: 'CodePen', imageUrl: 'codepen.io', link: 'https://codepen.io/' },
        { id: 2, name: 'RegExr', imageUrl: 'regexr.com', link: 'https://regexr.com/' },
        { id: 3, name: 'Code Wars', imageUrl: 'codewars.com', link: 'https://www.codewars.com/' },
        { id: 4, name: 'Decaffeinate', imageUrl: 'decaffeinate-project.org', link: 'https://decaffeinate-project.org/repl/' }
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

export default Practice;