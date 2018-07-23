import React from 'react';
import PropTypes from 'prop-types';

export default function DashboardSection({ children, title }) {
  return (
    <React.Fragment>
      <h3>{title}</h3>
      <div className="dashboard-items-container">
        { children }
      </div>
    </React.Fragment>
  );
}

DashboardSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
