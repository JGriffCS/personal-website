import React from 'react';
import PropTypes from 'prop-types';

class AddCategoryModal extends React.Component {
  constructor (props) {
    super(props);

    this.state = {

    };
  }

  render () {
    return (
      <div className="add-category-container">
        <div className="add-category-form-container">
          <form>
            <label>Category Name:</label>
            <input type="text" id="Name" />
            <label>Route Identifier:</label>
            <input type="text" id="Name" />
            <label>Icon (FA):</label>
            <input type="text" id="Name" />
          </form>
        </div>
        <div className="add-category-preview">
          <div className="category">
            <div className="title">Test</div>
            <div className="visual">
              <i className={`fas fas-newspaper`}></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCategoryModal;