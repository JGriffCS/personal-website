import React from 'react';

class ActionItem extends React.Component {
  render () {
    return (
      <a className="action-item" href={this.props.item.link}>
        <div>
          <div className="action-image-container">
            <img src={`https://logo.clearbit.com/${this.props.item.imageUrl}?s=128`} />
          </div>
          <div className="action-item-title">{this.props.item.name}</div>
        </div>
      </a>
    );
  }
}

export default ActionItem;