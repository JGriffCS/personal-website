import React from 'react';
import { Link } from 'react-router-dom';

import './header.pcss';

class Header extends React.Component {
  // Fix this stuff. Needs to be a whole button obvs
  render() {
    return (
      <div className="header">
        <div className="header-content">
          <div className="nav-button">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-button">
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
