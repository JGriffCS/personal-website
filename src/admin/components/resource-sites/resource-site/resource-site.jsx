import React from 'react';
import PropTypes from 'prop-types';

import RemoveResourceSite from '../remove-resource-site/remove-resource-site';

import './resource-site.pcss';

class ResourceSite extends React.Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      modalOpen: false,
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

  render() {
    return (
      <React.Fragment>
        <RemoveResourceSite
          item={this.props.item}
          isOpen={this.state.modalOpen}
          close={this.closeModal}
        />
        <a href={this.props.item.link}>
          <div className="resource-site">
            <div className="resource-site-header" />
            <div className="resource-site-image-container">
              <img src={`https://logo.clearbit.com/${this.props.item.image_url}?s=128`} />
            </div>
            <div className="resource-site-title">{this.props.item.name}</div>
          </div>
        </a>
      </React.Fragment>
    );
  }
}

ResourceSite.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    site_category_id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ResourceSite;

