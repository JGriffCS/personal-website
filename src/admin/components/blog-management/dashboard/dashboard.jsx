import React from 'react';
import PropTypes from 'prop-types';

import DashboardSection from '../../shared/dashboard-section/dashboard-section';
import DashboardItem from '../../shared/dashboard-item/dashboard-item';

const BlogManagementDashboard = ({ match }) => (
  <DashboardSection>
    <DashboardItem path="add-post" icon="note_add" name="New Post" match={match} />
    <DashboardItem path="edit-posts" icon="edit" name="Edit Posts" match={match} />
    <DashboardItem path="add-tags" icon="playlist_add" name="Add Tags" match={match} />
  </DashboardSection>
);

BlogManagementDashboard.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogManagementDashboard;
