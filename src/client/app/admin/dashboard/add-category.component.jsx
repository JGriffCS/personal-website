import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../shared/modal/modal.component';

class AddCategoryModal extends React.Component {
  constructor (props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveCategory = this.saveCategory.bind(this);

    this.state = {
      name: '',
      value: '',
      icon: ''
    };
  }

  handleInputChange (event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  saveCategory () {

  }

  render () {
    console.log(this.props.isOpen);
    return (
      <Modal
        title="Add Dashboard Component"
        isOpen={this.props.isOpen}
        onRequestClose={this.props.close}
        onPrimaryAction={this.saveCategory}>
        <div className="add-category-container">
          <div className="add-category-form-container">
            <form onSubmit={this.saveCategory}>
              <label>Category Name:</label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
              <label>Route Identifier:</label>
              <input type="text" name="value" value={this.state.value} onChange={this.handleInputChange} />
              <label>Icon (FA):</label>
              <input type="text" name="icon" value={this.state.icon} onChange={this.handleInputChange} />
            </form>
          </div>
          <div className="add-category-preview">
            <div className="category">
              <div className="title">{this.state.name}</div>
              <div className="visual">
                <i className={`fas ${this.state.icon}`}></i>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default AddCategoryModal;