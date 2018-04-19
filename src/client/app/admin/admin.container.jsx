import React from 'react';
import { Route } from 'react-router-dom';

import AdminDashboard from './dashboard/dashboard.component';
import AskSomething from './ask/ask.component';
import Breadcrumbs from './shared/breadcrumbs/breadcrumbs.component';
import LearnSomething from './learn/learn.component';
import News from './news/news.component';
import CodeSomething from './code/code.component';
import WatchSomething from './watch/watch.component';

const adminRoutes = [
  { path: '/admin', name: 'Dashboard' },
  { path: '/admin/ask', name: 'Ask Something' },
  { path: '/admin/learn', name: 'Learn Something' },
  { path: '/admin/news', name: 'News' },
  { path: '/admin/code', name: 'Code Something' },
  { path: '/admin/watch', name: 'Watch Something' }
];

class Admin extends React.Component {
  render() {
    return (
      <div className="admin-container">
        <Breadcrumbs routes={adminRoutes} />
        <Route exact path={this.props.match.path} component={AdminDashboard} />
        <Route path={`${this.props.match.path}/ask`} component={AskSomething} />
        <Route path={`${this.props.match.path}/learn`} component={LearnSomething} />
        <Route path={`${this.props.match.path}/news`} component={News} />
        <Route path={`${this.props.match.path}/code`} component={CodeSomething} />
        <Route path={`${this.props.match.path}/watch`} component={WatchSomething} />
      </div>
    );
  }
}

export default Admin;