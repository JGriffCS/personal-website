import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addAdminResourceSite } from '../../../../actions/admin-resource-sites';
import Modal from '../../../../shared/modal/modal.component';

import './add-resource-site.pcss';

class AddResourceSiteModal extends React.Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveResourceSite = this.saveResourceSite.bind(this);

    this.state = {
      alert: null,
      modalOpen: false,
      name: '',
      imageUrl: '',
      link: '',
      showImage: false,
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

    if (name === 'imageUrl') {
      const preview = new Image();

      preview.onload = () => {
        this.setState({
          showImage: true,
        });
      };

      preview.onerror = () => {
        this.setState({
          showImage: false,
        });
      };

      preview.src = `https://logo.clearbit.com/${value}`;
    }

    this.setState({
      [name]: value,
      alert: null,
    });
  }

  saveResourceSite() {
    const body = {
      image_url: this.state.imageUrl,
      link: this.state.link,
      name: this.state.name,
      site_category_id: this.props.id,
    };

    axios.post('/api/admin/resource_sites', body).then((resp) => {
      this.props.addAdminResourceSite(this.props.id, resp.data[0]);
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
            className="btn btn-primary btn-small"
            onClick={this.openModal}
          >
            <i className="material-icons">add</i> Add Site
          </button>
        </div>
        <Modal
          title="Add Resource Site"
          alert={this.state.alert}
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          onPrimaryAction={this.saveResourceSite}
        >
          <div className="add-resource-site-container">
            <div className="add-resource-site-form-container">
              <form onSubmit={this.saveResourceSite}>
                <label htmlFor="name">
                  Site Name:
                  <input id="name" name="name" value={this.state.name} onChange={this.handleInputChange} type="text" />
                </label>
                <label htmlFor="link">
                  Website Url:
                  <input id="link" name="link" value={this.state.link} onChange={this.handleInputChange} type="text" />
                </label>
                <label htmlFor="imageUrl">
                  Image Url:
                  <input id="imageUrl" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange} type="text" />
                </label>
              </form>
            </div>
            <div className="add-resource-site-preview">
              <div className="action-item">
                <div className="action-image-container">
                  {
                    this.state.showImage ?
                      <img src={`https://logo.clearbit.com/${this.state.imageUrl}?s=128`} /> :
                      ''
                  }
                </div>
                <div className="action-item-title">{this.state.name}</div>
              </div>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

AddResourceSiteModal.propTypes = {
  addAdminResourceSite: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default connect(
  null,
  dispatch => bindActionCreators({ addAdminResourceSite }, dispatch),
)(AddResourceSiteModal);
