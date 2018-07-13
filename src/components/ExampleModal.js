import React, { Component } from 'react'
import Modal from './Modal'

class ExampleModal extends Component {
  render() {
      return (
        <Modal
          title="React Modal"
          visible={this.props.visible}
          close={this.props.close}
        >
          <em>Now you're thinking with portals!</em>
          <p>This is an example modal being rendered in #modal-root instead of #root.</p>
        </Modal>
      )
  }
}

export default ExampleModal