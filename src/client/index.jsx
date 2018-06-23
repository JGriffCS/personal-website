import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import { blogPosts } from './app/reducers/blogPosts';
import adminDashboardCategories from './app/reducers/admin-dashboard-categories';
import adminResourceSites from './app/reducers/admin-resource-sites';

import App from './app/App';

const initialState = {
  adminDashboardCategories: [],
  adminResourceSites: {},
  blogPosts: [],
};

const reducers = combineReducers({
  adminDashboardCategories,
  adminResourceSites,
  blogPosts,
});

const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore);

const store = createStoreWithMiddleware(reducers, initialState);

// Set token if one is found
const token = localStorage.getItem('id_token');
if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
