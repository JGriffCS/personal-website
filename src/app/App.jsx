import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/header.component.jsx';
import Layout from './components/Layout';
import Footer from './components/Footer/FooterComponent.jsx';

import Home from './containers/Home';
import Blog from './containers/Blog';
import Login from './containers/Login';
import Admin from './containers/Admin';

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