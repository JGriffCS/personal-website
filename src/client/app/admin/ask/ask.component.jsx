import React from 'react';

import ActionItem from '../shared/action-item/action-item.component';

// TODO: What is a pure component?!?!
class Ask extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      askables: [
        { id: 1, name: 'Game Dev SE', imageUrl: 'gamedev.stackexchange.com', link: 'https://gamedev.stackexchange.com' },
        { id: 2, name: 'UX SE', imageUrl: 'ux.stackexchange.com', link: 'https://ux.stackexchange.com' },
        { id: 3, name: 'Workplace SE', imageUrl: 'workplace.stackexchange.com', link: 'https://workplace.stackexchange.com' },
        { id: 4, name: 'Stack Overflow', imageUrl: 'stackoverflow.com', link: 'https://www.stackoverflow.com' }
      ]
    }
  }
  render () {
    return (
      <div className="action-items-container">
        {
          this.state.askables.map((askable) => {
            return (
              <ActionItem item={askable} key={askable.id}></ActionItem>
            )
          })
        }
      </div>
    );
  }
}

export default Ask;