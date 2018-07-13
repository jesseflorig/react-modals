import React, { Component } from 'react'

class ModalButton extends Component {
  render() {
    return (
      <button onClick={this.props.action}>
        {this.props.text}
      </button>
    )
  }
}

export default ModalButton