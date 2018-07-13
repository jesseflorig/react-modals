import React, { Component } from 'react'
import ReactDom from 'react-dom'

const modalRoot = document.getElementById('modal-root')

class Modal extends Component {
  render() {
    return this.props.visible ? ReactDom.createPortal(
      (
        <div className="modal">
          <div className="modal-container">
            <div className="modal-header">
              <h2>{this.props.title}</h2>
              <button 
                className="close-btn"
                onClick={this.props.close}
              >
                x
              </button>
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
            <div className="modal-footer">
              <small>Clicking the X button or outside the modal will close it</small>
            </div>
          </div>
          <div className="modal-overlay" onClick={this.props.close}>
          </div>
        </div>
      ),
      modalRoot
    ) : null
  }
}

export default Modal