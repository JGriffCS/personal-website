import React from 'react';

class ActionItem extends React.Component {
  render () {
    return (
      <a href={this.props.item.link}>
        <div className="action-item">
          <div>
            <img src={`https://logo.clearbit.com/${this.props.item.imageUrl}?s=128`} />
          </div>
          <div>{this.props.item.name}</div>
        </div>
      </a>
    );
  }
}

export default ActionItem;