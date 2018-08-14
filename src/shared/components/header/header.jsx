import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import './header.pcss';
import logo from '../../../assets/images/logo.svg';

const headerRoutes = [
  { path: '/', label: 'Home' },
  { path: '/blog', label: 'Blog' },
];

// TODO: Improve this logic to support subroutes
const isActive = (componentPath, currentPath) => componentPath === currentPath;

const Header = ({ location }) => (
  <div className="header">
    <div className="header-content">
      <img className="header-logo" src={logo} alt={logo} />
      <div className="nav-button-container">
        {
          headerRoutes.map(route => (
            <div className={`nav-button ${isActive(route.path, location.pathname) ? 'active' : ''}`} key={route.path}>
              <Link to={route.path}>{route.label}</Link>
            </div>
          ))
        }
      </div>
    </div>
  </div>
);

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Header);
