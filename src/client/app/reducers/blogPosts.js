import { SET_BLOG_POSTS } from '../constants/action-types/blog.js';

export const blogPosts = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case SET_BLOG_POSTS:
      return [...state, ...action.posts];
    default:
      return state;
  }
}