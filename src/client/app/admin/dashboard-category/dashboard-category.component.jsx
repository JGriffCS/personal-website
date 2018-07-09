import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeAdminDashboardCategory } from '../../actions/admin-dashboard-categories';

import RemoveCategory from './remove-category.component';

class DashboardCategory extends React.Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
    this.toggleRemovePrompt = this.toggleRemovePrompt.bind(this);
    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchEnd = this.touchEnd.bind(this);

    this.state = {
      alert: null,
      lastTouchX: null,
      lastTouchY: null,
      modalOpen: false,
      showRemovePrompt: false,
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

  removeCategory() {
    axios.delete(`/api/admin/resource_site_categories/${this.props.category.id}`).then(() => {
      this.props.removeAdminDashboardCategory(this.props.category.id);
    }).catch((err) => {
      const { data } = err.response;

      this.setState({
        alert: {
          type: 'error',
          message: data.msg,
        },
      });
    });
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
      <div className="dashboard-category-container">
        <RemoveCategory
          category={this.props.category}
          isOpen={this.state.modalOpen}
          close={this.closeModal}
        />

        <div className="dashboard-category-mobile-options">
          <div className="remove" onClick={this.toggleRemovePrompt}>
            <i className="material-icons">delete</i>
          </div>
        </div>

        <Link to={`${this.props.match.url}/${this.props.category.value}`}>
          <div
            className="category"
            style={controlStyles}
            onTouchStart={this.touchStart}
            onTouchMove={this.touchMove}
            onTouchEnd={this.touchEnd}
          >
            <div className="remove" onClick={this.toggleRemovePrompt}>
              <i className="material-icons">delete</i>
            </div>
            <div className="title">{this.props.category.name}</div>
            <div className="visual">
              <i className="material-icons">{this.props.category.icon}</i>
            </div>
          </div>
        </Link>

        <div className={`dashboard-category-remove ${this.state.showRemovePrompt ? 'visible' : ''}`}>
          <div className="remove-message">
            Remove Category?
          </div>
          <div className="remove-actions">
            <button className="btn btn-small btn-primary" onClick={this.removeCategory}>
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

DashboardCategory.propTypes = {
  category: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  removeAdminDashboardCategory: PropTypes.func.isRequired,
};

export default connect(
  null,
  dispatch => bindActionCreators({ removeAdminDashboardCategory }, dispatch),
)(DashboardCategory);
