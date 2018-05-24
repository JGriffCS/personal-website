import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.handleOverlayClick = this.handleOverlayClick.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  componentDidMount () {
    if (this.props.isOpen) {
      this.open();
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.open();
    } else if (!this.props.isOpen && prevProps.isOpen) {
      this.close();
    }
  }

  open () {
    this.setState({
      isOpen: true
    });
  }

  close () {
    this.setState({
      isOpen: false
    });
  }

  requestClose (event) {
    this.props.onRequestClose(event);
  }

  handleOverlayClick (event) {
    this.requestClose(event);
  }

  render () {
    const modal = this.state.isOpen ? (
      <div className="modal-mask">
        <div className="modal-wrapper">
          <div className="modal-container">

            <div className="modal-header">
              { this.props.title }
            </div>

            <div className="modal-body">
              { this.props.children }
            </div>

            <div className="modal-footer">
              ????
            </div>
          </div>
        </div>
      </div>
    ) : null;

    return ReactDOM.createPortal(
      modal,
      modalRoot
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired
};

export default Modal;

// const ModalPortal = () => {
//
// }
//
// module.exports = (ComposedComponent) => {
//
// }