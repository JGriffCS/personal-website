import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import DashboardCategory from '../dashboard-category/dashboard-category.component';

class Dashboard extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  componentDidMount () {
    axios.get('/api/admin/resource_site_categories').then(resp => this.setState({ categories: resp.data }), err => console.log(err));
  }

  render () {
    return (
      <React.Fragment>
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