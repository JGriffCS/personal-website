import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/header.component.jsx';
import Layout from './components/Layout/index';
import Footer from './components/Footer/FooterComponent.jsx';

import Home from './containers/Home/index';
import Blog from './containers/Blog/index';
import Login from './containers/Login/index';
import Admin from './containers/Admin/index';

import './App.Styles.scss';

// Add Switch around routes
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