import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './shared/components/header/header';
import Layout from './public/components/layout/layout';
import Loading from './shared/components/loading/loading';
// import Footer from './public/components/Footer/FooterComponent';

import './app.pcss';

import Blog from './public/containers/Blog/index';

const Home = Loadable({
  loader: () => import('./public/containers/home'),
  loading: Loading,
});
const Login = Loadable({
  loader: () => import('./admin/components/login/login'),
  loading: Loading,
});
const Admin = Loadable({
  loader: () => import('./admin/index'),
  loading: Loading,
});

export default () => (
  <Router>
    <div>
      <div className="header-container">
        <Header />
      </div>
      <div className="body-container">
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Layout>
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
        </Layout>
      </div>
    </div>
  </Router>
);
