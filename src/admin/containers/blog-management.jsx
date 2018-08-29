import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import DashboardItem from '../components/shared/dashboard-item/dashboard-item';
import DashboardSection from '../components/shared/dashboard-section/dashboard-section';


const BlogManagement = ({ match }) => (
  <div>
    <Route exact path={match.path}>
      <DashboardSection>
        <DashboardItem path="add-post" icon="note_add" name="New Post" match={match} />
        <DashboardItem path="edit-posts" icon="edit" name="Manage Posts" match={match} />
        <DashboardItem path="add-tags" icon="playlist_add" name="Manage Tags" match={match} />
      </DashboardSection>
    </Route>
  </div>
);

BlogManagement.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogManagement;
