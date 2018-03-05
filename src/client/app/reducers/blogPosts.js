import { SET_BLOG_POSTS } from '../constants/ActionTypes.js';

export const blogPosts = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case SET_BLOG_POSTS:
      return [...state, ...action.posts];
    default:
      return state;
  }
}