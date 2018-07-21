import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import { blogPosts } from './app/reducers/blogPosts';
import adminResourceCategories from './app/reducers/admin-resource-categories';
import adminResourceSites from './app/reducers/admin-resource-sites';

import App from './app/App';

const initialState = {
  adminResourceCategories: [],
  adminResourceSites: {},
  blogPosts: [],
};

const reducers = combineReducers({
  adminResourceCategories,
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

axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('id_token');
      window.location.href = '/login';
    }
  },
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
