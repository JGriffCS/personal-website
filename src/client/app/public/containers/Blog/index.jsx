import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setBlogPosts } from '../../../actions/blogPosts';

import BlogPost from '../../components/BlogPost/index';
import BlogNavigator from '../../components/BlogNavigator/index';

import './styles.pcss';

class Blog extends React.Component {
  constructor(props, context) {
    super(props, context);

    console.log(this.props);
  }

  componentDidMount() {
    axios.get('/blogposts').then(response => this.props.dispatch(setBlogPosts(response.data)));
  }

  render() {
    const { blogPosts } = this.props;
    console.log (blogPosts);
    return (
      <div className="blog-container">
        <div className="posts-container">
          {
            (blogPosts || []).map((post, idx) => {
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
