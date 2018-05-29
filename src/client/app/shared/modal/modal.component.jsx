import React from 'react';
import PropTypes from 'prop-types';

import ModalWrapper from './modal-wrapper.component';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.requestClose = this.requestClose.bind(this);

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
    const styles = !this.state.isOpen ? {
      display: 'none'
    } : {};

    return (
      <ModalWrapper>
        <div className="modal-mask" style={styles}>
          <div className="modal-wrapper">
            <div className="modal-container">

              <div className="modal-header">
                <div className="modal-title">
                  { this.props.title }
                </div>
                <div className="modal-close" onClick={ this.requestClose }>
                  <i className="fa fa-times" onClick={ this.requestClose } />
                </div>
              </div>

              <div className="modal-body">
                { this.props.children }
              </div>

              <div className="modal-footer">
                {this.props.onPrimaryAction ?
                  <button>{this.props.primaryAction}</button> :
                  ""
                }
                <button>{this.props.secondaryAction}</button>
              </div>
            </div>
          </div>
        </div>
      </ModalWrapper>
    )
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onPrimaryAction: PropTypes.func,
  onRequestClose: PropTypes.func.isRequired,
  onSecondaryAction: PropTypes.func,
  primaryAction: PropTypes.string,
  secondaryAction: PropTypes.string,
};

Modal.defaultProps = {
  primaryAction: 'Save',
  secondaryAction: 'Close',
};

export default Modal;
