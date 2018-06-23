import React from 'react';
import PropTypes from 'prop-types';
import { matchPath, withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const DEFAULT_MATCH_OPTIONS = { exact: true };

const getBreadcrumbs = ({ routes, location }) => {
  const matches = [];
  const { pathname } = location;

  pathname
    .replace(/\/$/, '')
    .split('/')
    .reduce((previous, current) => {
      const pathSection = `${previous}/${current}`;
      const match = routes.find((route) => {
        const { matchOptions, path } = route;
        return matchPath(pathSection, { ...(matchOptions || DEFAULT_MATCH_OPTIONS), path });
      });


      if (match) {
        matches.push({
          name: match.name,
          path: pathSection,
        });
      }

      return pathSection;
    });

  return matches;
};

const Breadcrumbs = ({ location, routes }) => {
  const breadcrumbs = getBreadcrumbs({ location, routes });

  return (
    <div className="breadcrumb-container">
      {breadcrumbs.map(({ name, path }, index) => (
        <React.Fragment key={path}>
          <span className="breadcrumb">
            {index !== breadcrumbs.length - 1 ?
              <NavLink to={path}>
                {name}
              </NavLink> :
              `${name}`
            }
          </span>
          {(index < breadcrumbs.length - 1) && <span className="divider">/</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

Breadcrumbs.propTypes = {
  location: PropTypes.shape().isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default withRouter(Breadcrumbs);
