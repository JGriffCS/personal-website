import React from 'react';

class ActionItem extends React.Component {
  render () {
    return (
      <a className="action-item" href={this.props.item.link || this.props.item.Link}>
        <div>
          <div className="action-image-container">
            <img src={`https://logo.clearbit.com/${this.props.item.imageUrl || this.props.item.ImageUrl}?s=128`} />
          </div>
          <div className="action-item-title">{this.props.item.name || this.props.item.Name}</div>
        </div>
      </a>
    );
  }
}

export default ActionItem;