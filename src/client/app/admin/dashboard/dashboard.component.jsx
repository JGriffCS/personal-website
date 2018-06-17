import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DashboardCategory from '../dashboard-category/dashboard-category.component';
import AddCategory from './add-category.component';

import { initAdminDashboardCategories } from '../../actions/admin-dashboard-categories';

class Dashboard extends React.Component {
  constructor (props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

    this.state = {
      categories: [],
      modalOpen: false,
    };
  }

  componentDidMount () {
    axios.get('/api/admin/resource_site_categories').then(resp => this.props.initAdminDashboardCategories(resp.data), err => console.log(err));
  }

  openModal () {
    this.setState({
      modalOpen: true
    });
  }

  closeModal () {
    this.setState({
      modalOpen: false
    });
  }

  render () {
    return (
      <React.Fragment>
        <AddCategory isOpen={this.state.modalOpen} close={this.closeModal}></AddCategory>
        <div>
          <button onClick={this.openModal}>+ Add</button>
        </div>
        <div className="category-options">
          {
            this.props.categories.map((category) => {
              return (
                <DashboardCategory key={category.id} category={category} match={this.props.match} />
              )
            })
          }
        </div>
      </React.Fragment>
    )
  }
}

Dashboard.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = (state) => {
  return {
    categories: state.adminDashboardCategories,
  }
};

export default connect(mapStateToProps, dispatch => bindActionCreators({ initAdminDashboardCategories }, dispatch))(Dashboard);