import React from 'react';

import './footer.pcss';
import reactLogo from '../../../assets/images/react.svg';
import reduxLogo from '../../../assets/images/redux.svg';
import postcssLogo from '../../../assets/images/post.svg';
import nodeLogo from '../../../assets/images/node.svg';

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <div className="built-with">
        <span className="built-with-label">Built with:</span>
        <img src={reactLogo} alt="React" title="React" />
        <img src={reduxLogo} alt="Redux" title="Redux" />
        <img src={postcssLogo} alt="PostCSS" title="PostCSS" />
        <img src={nodeLogo} alt="Node" title="Node" />
      </div>
      <div className="copyright">
        © 2020 Joshua Griffiths
      </div>
    </div>
  </div>
);

export default Footer;
