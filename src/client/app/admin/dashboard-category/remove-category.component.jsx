import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeAdminDashboardCategory } from '../../actions/admin-dashboard-categories';
import Modal from '../../shared/modal/modal.component';

class RemoveCategoryModal extends React.Component {
  constructor (props) {
    super(props);

    this.removeCategory = this.removeCategory.bind(this);

    this.state = {
      alert: null,
    };
  }

  removeCategory () {
    axios.delete(`/api/admin/resource_site_categories/${this.props.category.id}`).then(resp => {
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

  render () {
    return (
      <Modal
        title="Remove Dashboard Category"
        alert={this.state.alert}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.close}
        onPrimaryAction={this.removeCategory}
        primaryAction="Confirm">
        <div className="remove-category-container">
          <div className="confirmation-message">Permanently remove this category?</div>
          <div className="category-preview">
            <div className="category">
              <div className="title">{this.props.category.name}</div>
              <div className="visual">
                <i className={`fas ${this.props.category.icon}`} />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

RemoveCategoryModal.propTypes = {
  category: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default connect(null, dispatch => bindActionCreators({ removeAdminDashboardCategory }, dispatch))(RemoveCategoryModal);