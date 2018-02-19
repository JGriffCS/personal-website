import React from 'react';

class BlogNavigator extends React.Component {
  render() {
    return (
      <div>
        <div>
          Filter by Month:
          <ul>
            <li>November 2017</li>
            <li>December 2017</li>
            <li>January 2018</li>
          </ul>
        </div>
        <div>
          Filter by Tags
          <ul>
            <li>Game Dev</li>
            <li>Web Dev</li>
            <li>Misc</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BlogNavigator;