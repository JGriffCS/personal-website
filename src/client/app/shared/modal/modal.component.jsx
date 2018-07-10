import React from 'react';
import PropTypes from 'prop-types';

import Alert from '../alert/alert.component';
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

  componentDidMount() {
    if (this.props.isOpen) {
      this.open();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.open();
    } else if (!this.props.isOpen && prevProps.isOpen) {
      this.close();
    }
  }

  open() {
    this.setState({
      isOpen: true,
    });
  }

  close() {
    this.setState({
      isOpen: false,
    });
  }

  requestClose(event) {
    this.props.onRequestClose(event);
  }

  handleOverlayClick(event) {
    this.requestClose(event);
  }

  render() {
    const styles = !this.state.isOpen ? {
      display: 'none',
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
                <div className="modal-close" onClick={this.requestClose}>
                  <i className="material-icons" onClick={this.requestClose}>close</i>
                </div>
              </div>

              <div className="modal-body">
                { this.props.alert ? <Alert type={this.props.alert.type} message={this.props.alert.message} /> : '' }
                { this.props.children }
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-outline-secondary"
                  onClick={this.props.onSecondaryAction || this.props.onRequestClose}
                >
                  {this.props.secondaryAction}
                </button>
                {this.props.onPrimaryAction ?
                  <button
                    className="btn btn-primary"
                    onClick={this.props.onPrimaryAction}
                  >
                    {this.props.primaryAction}
                  </button> :
                  ''
                }
              </div>
            </div>
          </div>
        </div>
      </ModalWrapper>
    );
  }
}

Modal.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onPrimaryAction: PropTypes.func,
  onRequestClose: PropTypes.func.isRequired,
  onSecondaryAction: PropTypes.func,
  primaryAction: PropTypes.string,
  secondaryAction: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  alert: {},
  primaryAction: 'Save',
  secondaryAction: 'Close',
  onPrimaryAction: null,
  onSecondaryAction: null,
};

export default Modal;
