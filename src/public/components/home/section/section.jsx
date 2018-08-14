import React from 'react';
import PropTypes from 'prop-types';

import './section.pcss';

const Section = ({ children, title }) => (
  <div className="section">
    <h1 className="section-title">{title}</h1>
    <div className="section-body">
      {children}
    </div>
  </div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
