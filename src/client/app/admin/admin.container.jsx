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
      routes: [
        { id: 0, path: this.props.match.path, name: 'Dashboard' }
      ]
    };
  }

  componentDidMount () {
    axios.get('/admin/routes').then(resp => {
      const routeInfo = resp.data;
      const resourceRoutes = routeInfo.map(route => ({ id: route.id, path: `${this.props.match.path}/${route.value}`, name: route.name }));

      this.setState((prevState) => {
        return {
          routes: [...prevState.routes, ...resourceRoutes]
        }
      });
    });
  }

  render() {
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