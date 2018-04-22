import React from 'react';
import { Route } from 'react-router-dom';

import axios from 'axios';

import AdminDashboard from './dashboard/dashboard.component';
import Breadcrumbs from '../shared/breadcrumbs/breadcrumbs.component';
import ResourceSites from './resource-sites/resource-sites.component';

class Admin extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      adminRoutes: [
        { path: '/admin', name: 'Dashboard' }
      ],
      categories: []
    };
  }

  componentDidMount () {
    axios.get('/admin/resource_site_categories').then(resp => {
      const categories = resp.data;
      const resourceRoutes = categories.map(category => ({ path: `/admin/${category.Value}`, name: category.Name }));

      this.setState((prevState) => {
        return {
          categories,
          adminRoutes: [...prevState.adminRoutes, ...resourceRoutes]
        }
      });
    });
  }

  render() {
    return (
      <div className="admin-container">
        <Breadcrumbs routes={this.state.adminRoutes} />
        <Route exact path={this.props.match.path} component={AdminDashboard} />
        {
          this.state.categories.map((category) => {
            return (
              <Route path={`${this.props.match.path}/${category.Value}`} render={() => <ResourceSites siteCategory={category.ID} />} />
            )
          })
        }
      </div>
    );
  }
}

export default Admin;