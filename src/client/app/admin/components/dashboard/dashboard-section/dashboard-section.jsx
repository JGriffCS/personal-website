import React from 'react';
import PropTypes from 'prop-types';

export default function DashboardSection({ children }) {
  return (
    <div className="dashboard-items-container">
      { children }
    </div>
  );
}

DashboardSection.propTypes = {
  children: PropTypes.node.isRequired,
};
