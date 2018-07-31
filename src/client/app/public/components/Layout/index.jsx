import React from 'react';

import './styles.pcss';

class Layout extends React.Component {
  render() {
    return (
      <div className="layout-container">
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
