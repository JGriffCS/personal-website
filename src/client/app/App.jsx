import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './public/components/Header/header.component.jsx';
import Layout from './public/components/Layout/index';
import Footer from './public/components/Footer/FooterComponent.jsx';

import Home from './public/containers/Home/index';
import Blog from './public/containers/Blog/index';
import Login from './admin/login/login.component';
import Admin from './admin/admin.container';

import './App.Styles.scss';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Layout>
            <Route exact path="/" component={Home}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/login" component={Login}/>
            <Route path="/admin" component={Admin}/>
          </Layout>
        </div>
      </Router>
    );
  }
}