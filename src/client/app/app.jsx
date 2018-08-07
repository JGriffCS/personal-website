import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './public/components/header/header';
import Layout from './public/components/layout/layout';
// import Footer from './public/components/Footer/FooterComponent';

import Home from './public/containers/home';
import Blog from './public/containers/Blog/index';
import Login from './admin/components/login/login';
import Admin from './admin/index';

import './app.pcss';

export default () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Layout>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
      </Layout>
    </div>
  </Router>
);
