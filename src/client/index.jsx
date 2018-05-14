import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { createBrowserHistory } from 'history';

import { blogPosts } from './app/reducers/blogPosts';

const initialState = {
  blogPosts: [],
};

const reducers = combineReducers({
  blogPosts,
});

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk)
)(createStore);

const store = createStoreWithMiddleware(reducers, initialState);

import App from './app/App';

// Configure axios
axios.interceptors.response.use((resp) => {

});

// Set token if one is found
const token = localStorage.getItem('id_token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);