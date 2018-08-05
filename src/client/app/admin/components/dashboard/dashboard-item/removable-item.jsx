import React from 'react';
import PropTypes from 'prop-types';

import './removable-item.pcss';

// TODO: Make actions and reducers generic
// TODO: Make store hold object of Dashboard Items
// TODO: Make a property ResourceCategories that this can interact with
function withDeleteFunctionality(DashboardItem) {
  class RemovableItem extends React.Component {
    constructor(props) {
      super(props);

      this.removeItem = this.removeItem.bind(this);
      this.toggleRemovePrompt = this.toggleRemovePrompt.bind(this);
      this.touchStart = this.touchStart.bind(this);
      this.touchMove = this.touchMove.bind(this);
      this.touchEnd = this.touchEnd.bind(this);

      this.state = {
        lastTouchX: null,
        lastTouchY: null,
        showRemovePrompt: false,
        slideX: 0,
      };
    }

    removeItem() {
      this.props.deleteAction(this.props.id);
    }

    toggleRemovePrompt(e) {
      e.preventDefault();

      this.setState({
        showRemovePrompt: !this.state.showRemovePrompt,
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
        <div className="removable-item-wrapper">
          <div className="removable-item-mobile-options">
            <div className="remove" onClick={this.toggleRemovePrompt}>
              <i className="material-icons">delete</i>
            </div>
          </div>

          <div
            className="removable-item-controls"
            style={controlStyles}
            onTouchStart={this.touchStart}
            onTouchMove={this.touchMove}
            onTouchEnd={this.touchEnd}
          >
            <div className="remove" onClick={this.toggleRemovePrompt}>
              <i className="material-icons">delete</i>
            </div>
            <DashboardItem {...this.props} />
          </div>

          <div className={`removable-item-confirmation ${this.state.showRemovePrompt ? 'visible' : ''}`}>
            <div className="remove-message">
              Remove Category?
            </div>
            <div className="remove-actions">
              <button className="btn btn-small btn-primary" onClick={this.removeItem}>
                Confirm
              </button>
              <button className="btn btn-small btn-outline-secondary" onClick={this.toggleRemovePrompt}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  RemovableItem.propTypes = {
    deleteAction: PropTypes.func.isRequired,
  };

  return RemovableItem;
}

export default withDeleteFunctionality;
