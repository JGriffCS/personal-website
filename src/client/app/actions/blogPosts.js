import { SET_BLOG_POSTS } from '../constants/action-types/blog';

export function setBlogPosts(posts) {
  return {
    type: SET_BLOG_POSTS,
    posts,
  };
}