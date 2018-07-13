import React, { Component } from 'react'
import Modal from './Modal'

class AnotherModal extends Component {
  render() {
    return (
      <Modal
        title="Another React Modal"
        visible={this.props.visible}
        close={this.props.close}
      >
        <p>This modal reuses the Modal component.</p>
        <p>It is triggered by a button re-using the Modal button component with a different state prop passed in.</p>
      </Modal>
    )
  }
}

export default AnotherModal