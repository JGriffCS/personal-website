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
    this.touchEnd = this.touchEnd.bind(this);

    this.state = {
      lastTouchX: null,
      lastTouchY: null,
      modalOpen: false,
      slideX: 0,
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

    let newSlideX = null;

    // Only update swipe if it will adjust the visibility of the controls
    if (diffX < 0 && this.state.slideX > 0) {
      // If swiping left while controls are visible, slide as far as 0 (origin)
      newSlideX = Math.max(this.state.slideX + diffX, 0);
    } else if (diffX > 0 && this.state.slideX < 60) {
      // If swiping right while controls aren't completely visible, slide as far as 60 (max)
      newSlideX = Math.min(this.state.slideX + diffX, 60);
    }

    this.setState({
      lastTouchX: touchObj.pageX,
      lastTouchY: touchObj.pageY,
      slideX: (newSlideX !== null ? newSlideX : this.state.slideX),
    });
  }

  touchEnd() {
    const { slideX } = this.state;

    // On touch end, snap the controls to either completely hidden
    // or completely visible depending on current state
    if (slideX >= 30 && slideX < 60) {
      this.setState({ slideX: 60 });
    } else if (slideX < 30 && slideX > 0) {
      this.setState({ slideX: 0 });
    }
  }

  render() {
    const controlStyles = {
      marginLeft: this.state.slideX,
    };

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
            className="category"
            style={controlStyles}
            onTouchStart={this.touchStart}
            onTouchMove={this.touchMove}
            onTouchEnd={this.touchEnd}
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
