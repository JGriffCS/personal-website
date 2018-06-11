import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// TODO: Action import
import Modal from '../../shared/modal/modal.component';

class AddResourceSiteModal extends React.Component {
  constructor (props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveResourceSite = this.saveResourceSite.bind(this);

    this.state = {
      alert: null,
      name: '',
      imageUrl: '',
      link: '',
    };
  }

  handleInputChange (event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      alert: null,
    });
  }

  saveResourceSite () {
    const body = {
      image_url: this.state.imageUrl,
      link: this.state.link,
      name: this.state.name,
      site_category_id: this.props.categoryId,
    };

    // TODO: Axios Post
  }

  render () {
    return (
      <Modal
        title="Add Resource Site"
        alert={this.state.alert}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.close}
        onPrimaryAction={this.saveResourceSite}>
          <div className="add-resource-site-container">
            <div className="add-resource-site-form-container">
              <form onSubmit={this.saveResourceSite}>
                <label>Site Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                <label>Website Url:</label>
                <input type="text" name="link" value={this.state.link} onChange={this.handleInputChange} />
                <label>Image Url:</label>
                <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange} />
              </form>
            </div>
            <div className="add-resource-site-preview">
              <div className="action-image-container">
                <img src={`https://logo.clearbit.com/${this.state.imageUrl}?s=128`} />
              </div>
              <div className="action-item-title">{this.state.name}</div>
            </div>
          </div>
      </Modal>
    )
  }
}

export default AddResourceSiteModal;