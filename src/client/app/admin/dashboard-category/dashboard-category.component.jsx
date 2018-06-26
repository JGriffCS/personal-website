import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import RemoveCategory from './remove-category.component';

class DashboardCategory extends React.Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);

    this.state = {
      lastTouchX: null,
      lastTouchY: null,
      modalOpen: false,
      showControls: false,
      touchXDiff: 0,
    };
  }

  openModal(e) {
    e.preventDefault();

    this.setState({
      modalOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false,
    });
  }

  touchStart(e) {
    const touchObj = e.changedTouches[0];

    this.setState({
      touchXDiff: 0,
      lastTouchX: touchObj.pageX,
      lastTouchY: touchObj.pageY,
    });
  }

  touchMove(e) {
    const touchObj = e.changedTouches[0];

    const diffX = touchObj.pageX - this.state.lastTouchX;
    const diffY = touchObj.pageY - this.state.lastTouchY;

    // Assume that if vertical movement greater than horizontal that not swiping horizontally
    if (Math.abs(diffX) < Math.abs(diffY)) {
      return;
    }

    let newControlState = null;
    let newTouchDiff = null;
    const totalDiff = this.state.touchXDiff + diffX;
    
    if (diffX < 0 && this.state.showControls) { // If swiping left and controls shown
      if (totalDiff < -60) {
        newControlState = false;
        newTouchDiff = 0;
      } else {
        newTouchDiff = totalDiff;
      }
    } else if (diffX < 0 && !this.state.showControls) { // If swiping left and controls hidden
      newTouchDiff = Math.max(totalDiff, 0);
    } else if (diffX > 0 && this.state.showControls) { // If swiping right and controls shown
      newTouchDiff = Math.min(totalDiff, 0);
    } else if (diffX > 0 && !this.state.showControls) { // If swiping right and controls hidden
      if (totalDiff > 60) {
        newControlState = true;
        newTouchDiff = 0;
      } else {
        newTouchDiff = totalDiff;
      }
    }

    this.setState({
      lastTouchX: touchObj.pageX,
      lastTouchY: touchObj.pageY,
      showControls: newControlState !== null ? newControlState : this.state.showControls,
      touchXDiff: newTouchDiff !== null ? newTouchDiff : this.state.touchXDiff,
    });
  }

  render() {
    return (
      <React.Fragment>
        <RemoveCategory
          category={this.props.category}
          isOpen={this.state.modalOpen}
          close={this.closeModal}
        />
        <Link to={`${this.props.match.url}/${this.props.category.value}`}>
          <div className="dashboard-category-mobile-options">
            Hi!
          </div>
          <div
            className={`category ${this.state.showControls ? 'show-controls' : ''}`}
            onTouchStart={this.touchStart}
            onTouchMove={this.touchMove}
          >
            <div className="remove" onClick={this.openModal}>
              <i className="fas fa-trash-alt" />
            </div>
            <div className="title">{this.props.category.name}</div>
            <div className="visual">
              <i className={`fas ${this.props.category.icon}`} />
            </div>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

DashboardCategory.propTypes = {
  category: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default DashboardCategory;
