import { SET_BLOG_POSTS } from '../constants/ActionTypes';

export function setBlogPosts(posts) {
  return {
    type: SET_BLOG_POSTS,
    posts,
  };
}