import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeAdminResourceSite } from '../../actions/admin-resource-sites';
import Modal from '../../shared/modal/modal.component';

class RemoveResourceSiteModal extends React.Component {
  constructor(props) {
    super(props);

    this.removeResourceSite = this.removeResourceSite.bind(this);

    this.state = {
      alert: null,
    };
  }

  removeResourceSite() {
    axios.delete(`/api/admin/resource_sites/${this.props.item.id}`).then(() => {
      this.props.removeAdminResourceSite(this.props.item.site_category_id, this.props.item.id);
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
      <Modal
        title="Remove Resource Site"
        alert={this.state.alert}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.close}
        onPrimaryAction={this.removeResourceSite}
        primaryAction="Confirm"
      >
        <div className="remove-resource-site-container">
          <div className="confirmation-message">Permanently remove this site?</div>
          <div className="resource-site-preview">
            <div className="action-item">
              <div>
                <div className="action-image-container">
                  <img src={`https://logo.clearbit.com/${this.props.item.image_url}?s=128`} />
                </div>
                <div className="action-item-title">{this.props.item.name}</div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

RemoveResourceSiteModal.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    site_category_id: PropTypes.number.isRequired,
  }).isRequired,
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  removeAdminResourceSite: PropTypes.func.isRequired,
};

export default connect(
  null,
  dispatch => bindActionCreators({ removeAdminResourceSite }, dispatch)
)(RemoveResourceSiteModal);
