import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './shared/components/header/header';
import Layout from './shared/components/layout/layout';
import Loading from './shared/components/loading/loading';
import Footer from './shared/components/footer/footer';

import './app.pcss';

import BlogWrapper from './public/components/blog/wrapper/blog-wrapper';

const Home = Loadable({
  loader: () => import('./public/components/home/wrapper/home-wrapper'),
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
        <Layout>
          <Route path="/blog" component={BlogWrapper} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
        </Layout>
      </div>
      <Footer />
    </div>
  </Router>
);
