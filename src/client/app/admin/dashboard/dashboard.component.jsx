import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import DashboardCategory from '../dashboard-category/dashboard-category.component';
import AddCategory from './add-category.component';
import Modal from '../../shared/modal/modal.component';

class Dashboard extends React.Component {
  constructor (props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      categories: [],
      modalOpen: false
    };
  }

  componentDidMount () {
    axios.get('/api/admin/resource_site_categories').then(resp => this.setState({ categories: resp.data }), err => console.log(err));
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
            this.state.categories.map((category) => {
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

export default Dashboard;