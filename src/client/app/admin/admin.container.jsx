import React from 'react';
import { Route } from 'react-router-dom';

import axios from 'axios';

import AdminDashboard from './dashboard/dashboard.component';
import Breadcrumbs from '../shared/breadcrumbs/breadcrumbs.component';
import ResourceSites from './resource-sites/resource-sites.component';

const adminRoutes = [
  { path: '/admin', name: 'Dashboard' },
  { path: '/admin/ask', name: 'Ask Something' },
  { path: '/admin/learn', name: 'Learn Something' },
  { path: '/admin/news', name: 'News' },
  { path: '/admin/code', name: 'Code Something' },
  { path: '/admin/watch', name: 'Watch Something' }
];

class Admin extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      categories: []
    };
  }

  componentDidMount () {
    axios.get('/admin/resource_site_categories').then(resp => this.setState({ categories: resp.data }));
  }

  render() {
    return (
      <div className="admin-container">
        <Breadcrumbs routes={adminRoutes} />
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