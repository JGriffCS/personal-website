import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import DashboardCategory from '../dashboard-category/dashboard-category.component';
import Modal from '../../shared/modal/modal.component';

class Dashboard extends React.Component {
  constructor (props) {
    super(props);

    this.openAddModal = this.openAddModal.bind(this);

    this.state = {
      categories: [],
      addModalOpen: false
    };
  }

  componentDidMount () {
    axios.get('/api/admin/resource_site_categories').then(resp => this.setState({ categories: resp.data }), err => console.log(err));
  }

  openAddModal () {
    this.setState({
      addModalOpen: true
    });
  }

  closeAddModal () {
    this.setState({
      addModalOpen: false
    });
  }

  render () {
    return (
      <React.Fragment>
        <Modal
          isOpen={this.state.addModalOpen}
          onRequestClose={this.closeAddModal}>
          Test
        </Modal>
        <div>
          <button onClick={this.openAddModal}>+ Add</button>
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