import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import BlogPost from '../../components/BlogPost/index';
import BlogNavigator from '../../components/BlogNavigator/index';

class Blog extends React.Component {
  constructor() {
    super();

    this.state = {
      blogPosts: [],
    };
  }

  componentDidMount() {
    console.log('hell');
    axios.get('/blogposts').then(response => this.setState({ blogPosts: response.data }));
  }

  render() {
    const { blogPosts } = this.state;

    return (
      <div className="blog-container">
        <div className="posts-container">
          {
            blogPosts.map((post, idx) => {
              console.log(post);
              return (
                <div>
                  <BlogPost key={idx} post={post}></BlogPost>
                  {
                    idx !== (blogPosts.length - 1) ? <hr /> : ""
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

function mapStateToProps(state) {
  return {
    blogPosts: state.blogPosts,
  };
}

export default connect(mapStateToProps)(Blog);