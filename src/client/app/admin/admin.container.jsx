import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import axios from 'axios';

import Dashboard from './containers/dashboard';
import Breadcrumbs from '../shared/breadcrumbs/breadcrumbs.component';
import ResourceSites from './containers/resource-sites';

import './admin.pcss';

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: false,
      routes: [],
    };
  }

  componentDidMount() {
    axios.get('/api/admin/routes').then((resp) => {
      const routeInfo = resp.data;
      const resourceRoutes = routeInfo.map(route => ({ id: route.id, path: `${this.props.match.path}/${route.path}`, name: route.name }));

      this.setState(prevState => ({
        ready: true,
        routes: [...prevState.routes, ...resourceRoutes],
      }));
    }, (err) => {
      console.log(err);
    });
  }

  render() {
    // Need a more elegant way to prevent child rendering before initial auth
    if (!this.state.ready) return ('');

    const breadcrumbs = [
      { id: 0, path: this.props.match.path, name: 'Dashboard' },
      ...this.state.routes,
    ];

    return (
      <div className="admin-container">
        <Breadcrumbs routes={breadcrumbs} />
        <Route exact path={this.props.match.path} component={Dashboard} />
        {
          this.state.routes.map(route => (
            <Route
              exact
              key={route.id}
              path={route.path}
              render={() => <ResourceSites siteCategory={route.id} />}
            />
          ))
        }
      </div>
    );
  }
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Admin;
