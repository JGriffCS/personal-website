import React from 'react';
import axios from 'axios';

import BlogPost from '../../components/BlogPost/index';
import BlogNavigator from '../../components/BlogNavigator/index';

let testPosts = [];

axios.get('/blogposts').then(response => testPosts = response.data || []);

class Blog extends React.Component {
  render() {
    return (
      <div className="blog-container">
        <div className="posts-container">
          {
            testPosts.map((post, idx) => {
              return (
                <div>
                  <BlogPost key={idx} post={post}></BlogPost>
                  {
                    idx !== (testPosts.length - 1) ? <hr /> : ""
                  }
                </div>
              );
            })
          }
        </div>
        <div className="navigator-container">
          <BlogNavigator></BlogNavigator>
        </div>
      </div>
    )
  }
}

export default Blog;