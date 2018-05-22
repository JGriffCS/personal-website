import React from 'react';
import PropTypes from 'prop-types';

import modalWrapper from '../../shared/modal/modal.component.jsx';

class AddCategoryModal extends React.Component {
  constructor (props) {
    super(props);

    this.state = {

    };
  }

  render () {
    return (
      <div>
        <form>
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default modalWrapper(AddCategoryModal);