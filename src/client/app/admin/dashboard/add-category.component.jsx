import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addAdminDashboardCategory } from '../../actions/admin-dashboard-categories';
import Modal from '../../shared/modal/modal.component';

class AddCategoryModal extends React.Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveCategory = this.saveCategory.bind(this);

    this.state = {
      alert: null,
      icon: '',
      modalOpen: false,
      name: '',
      value: '',
    };
  }

  openModal() {
    this.setState({
      modalOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false,
    });
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      alert: null,
    });
  }

  saveCategory() {
    const body = {
      value: this.state.value,
      name: this.state.name,
      icon: this.state.icon,
    };

    axios.post('/api/admin/resource_site_categories', body).then((resp) => {
      this.props.addAdminDashboardCategory(resp.data[0]);
      this.closeModal();
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

  render() {
    return (
      <React.Fragment>
        <div className="add-btn-container">
          <button
            className="btn btn-outline-primary btn-small"
            onClick={this.openModal}
          >
            <i className="material-icons">add</i> Add Item
          </button>
        </div>
        <Modal
          title="Add Dashboard Category"
          alert={this.state.alert}
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          onPrimaryAction={this.saveCategory}
        >
          <div className="add-category-container">
            <div className="add-category-form-container">
              <form onSubmit={this.saveCategory}>
                <label htmlFor="name">
                  Category Name:
                  <input id="name" name="name" value={this.state.name} onChange={this.handleInputChange} type="text" />
                </label>
                <label htmlFor="value">
                  Route Identifier:
                  <input id="value" name="value" value={this.state.value} onChange={this.handleInputChange} type="text" />
                </label>
                <label htmlFor="icon">
                  Icon (FA):
                  <input id="icon" name="icon" value={this.state.icon} onChange={this.handleInputChange} type="text" />
                </label>
              </form>
            </div>
            <div className="add-category-preview">
              <div className="category">
                <div className="title">{this.state.name}</div>
                <div className="visual">
                  <i className="material-icons">{this.state.icon}</i>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

AddCategoryModal.propTypes = {
  addAdminDashboardCategory: PropTypes.func.isRequired,
};

export default connect(
  null,
  dispatch => bindActionCreators({ addAdminDashboardCategory }, dispatch),
)(AddCategoryModal);
