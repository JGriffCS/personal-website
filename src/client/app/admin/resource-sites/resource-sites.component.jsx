import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ResourceSite from '../resource-site/resource-site.component';
import AddResourceSite from './add-resource-site.component';

import { initAdminResourceSites } from '../../actions/admin-resource-sites';

class ResourceSites extends React.Component {
  constructor (props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

    this.state = {
      sites: [],
      modalOpen: false,
    };
  }

  componentDidMount () {
    axios.get(`/api/admin/resource_sites/${this.props.siteCategory}`).then(resp =>
      this.props.initAdminResourceSites(this.props.siteCategory, resp.data)
    , err => console.log(err));
  }

  openModal () {
    this.setState({
      modalOpen: true,
    });
  }

  closeModal () {
    this.setState({
      modalOpen: false,
    });
  }

  render () {
    return (
      <React.Fragment>
        <AddResourceSite
          id={this.props.siteCategory}
          isOpen={this.state.modalOpen}
          close={this.closeModal} />
        <div>
          <button onClick={this.openModal}>+ Add</button>
        </div>
        <div className="action-items-container">
          {
            this.props.sites.map((site) => {
              return (
                <ResourceSite item={site} key={site.id} />
              )
            })
          }
        </div>
      </React.Fragment>
    );
  }
}

ResourceSites.propTypes = {
  siteCategory: PropTypes.number.isRequired
};

const mapStateToProps = (state, props) => {
  console.log(props);
  console.log(state);
  return {
    sites: state.adminResourceSites[props.siteCategory] || [],
  };
};

export default connect(mapStateToProps, dispatch => bindActionCreators({ initAdminResourceSites }, dispatch))(ResourceSites);