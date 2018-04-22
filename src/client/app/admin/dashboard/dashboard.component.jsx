import React from 'react';
import axios from 'axios';

import AdminCategory from '../shared/admin-dashboard-category/admin-dashboard-category.component';

class AdminDashboard extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  componentDidMount () {
    axios.get('/admin/resource_site_categories').then(resp => this.setState({ categories: resp.data }));
  }

  render () {
    return (
      <React.Fragment>
        <div className="category-options">
          {
            this.state.categories.map((category) => {
              return (
                <AdminCategory key={category.ID} category={category} match={this.props.match} />
              )
            })
          }
        </div>
      </React.Fragment>
    )
  }
}

export default AdminDashboard;