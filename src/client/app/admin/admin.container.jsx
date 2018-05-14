import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import axios from 'axios';

import Dashboard from './dashboard/dashboard.component';
import Breadcrumbs from '../shared/breadcrumbs/breadcrumbs.component';
import ResourceSites from './resource-sites/resource-sites.component';

class Admin extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      ready: false,
      routes: [
        { id: 0, path: this.props.match.path, name: 'Dashboard' }
      ]
    };
  }

  componentDidMount () {
    axios.get('/api/admin/routes').then(resp => {
      const routeInfo = resp.data;
      const resourceRoutes = routeInfo.map(route => ({ id: route.id, path: `${this.props.match.path}/${route.value}`, name: route.name }));

      this.setState((prevState) => {
        return {
          ready: true,
          routes: [...prevState.routes, ...resourceRoutes]
        }
      });
    }, err => {
      if (err.response.status === 401) {
        this.props.history.push('/login');
      } else {
        this.props.history.push('/');
      }
    });
  }

  render() {
    // Need a more elegant way to prevent child rendering before initial auth
    if (!this.state.ready) return ("");

    return (
      <div className="admin-container">
        <Breadcrumbs routes={this.state.routes} />
        <Route exact path={this.props.match.path} component={Dashboard} />
        {
          this.state.routes.map((route) => {
            return (
              <Route
                key={route.id}
                path={route.path}
                render={() => <ResourceSites siteCategory={route.id} />} />
            )
          })
        }
      </div>
    );
  }
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired
  }).isRequired
};

export default Admin;