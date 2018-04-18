import React from 'react';
import { Route } from 'react-router-dom';

import AdminDashboard from './dashboard/dashboard.component';
import AskSomething from './ask/ask.component';
import Breadcrumbs from './shared/breadcrumbs/breadcrumbs.component';
import LearnSomething from './learn/learn.component';
import WatchSomething from './watch/watch.component';

const adminRoutes = [
  { path: '/admin', name: 'Dashboard' },
  { path: '/admin/ask', name: 'Ask Something' },
  { path: '/admin/learn', name: 'Learn Something' },
  { path: '/admin/watch', name: 'Watch Something' }
];

class Admin extends React.Component {
  constructor (props, state) {
    super(props, state);
    console.log(props);

    // TODO: Obviously these need better names. Also they should come from redux or an api call
    this.state = {
      askables: [],
      learnables: [],
      practicables: [],
      watchables: [
        {iconImage: "", name: "Hulu", link: "https://www.hulu.com"},
        {iconImage: "", name: "Netflix", link: "https://www.netflix.com"},
        {iconImage: "", name: "Twitch", link: "https://www.twitch.com"},
        {iconImage: "", name: "Crunchy Roll", link: "https://www.crunchyroll.com"},
        {iconImage: "", name: "Youtube", link: "https://www.youtube.com"}
      ]
    };
  }
  render() {
    // TODO: Category component?
    // TODO: Probably don't need to cap height, so maybe a percentage or width to make a square?
    // Swap out components based on click with a breadcrumb to get back to main selections
    return (
      <div className="admin-container">
        <Breadcrumbs routes={adminRoutes} />
        <Route exact path={this.props.match.path} component={AdminDashboard} />
        <Route path={`${this.props.match.path}/ask`} component={AskSomething} />
        <Route path={`${this.props.match.path}/learn`} component={LearnSomething} />
        <Route path={`${this.props.match.path}/watch`} component={WatchSomething} />
      </div>
    );
  }
}

export default Admin;