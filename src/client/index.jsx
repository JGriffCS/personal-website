import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);