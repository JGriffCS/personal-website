import React from 'react';

class BlogPost extends React.Component {
  render() {
    const post = this.props.post;

    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.createdDate.toString()}</p>
        <div>
          {
            post.tags.map((tag, idx) => {
              return (
                <span key={'span' + idx} style={{color: `${tag.color}`, backgroundColor: `${tag.background}`}}>
                  {tag.name}
                </span>
              );
            })
          }
        </div>
        <div>
          {post.content}
        </div>
      </div>
    );
  }
}

export default BlogPost;