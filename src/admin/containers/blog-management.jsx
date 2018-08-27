import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import BlogManagementDashboard from '../components/blog-management/dashboard/dashboard';


const BlogManagement = ({ match }) => (
  <div>
    <Route
      exact
      path={match.path}
      render={() => <BlogManagementDashboard match={match} />}
    />
  </div>
);

BlogManagement.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogManagement;
