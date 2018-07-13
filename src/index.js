import React, { Component } from "react";
import ReactDOM from "react-dom";

import ExampleModal from './components/ExampleModal'
import AnotherModal from './components/AnotherModal'
import ModalButton from './components/ModalButton'

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showExampleModal: false,
      showAnotherModal: false
    }
    this.showExample = this.showExample.bind(this)
    this.hideExample = this.hideExample.bind(this)
    this.showAnother = this.showAnother.bind(this)
    this.hideAnother = this.hideAnother.bind(this)
  }

  showExample() {
    this.setState({ showExampleModal: true });
  }

  hideExample() {
    this.setState({ showExampleModal: false })
  }

  showAnother() {
    this.setState({ showAnotherModal: true });
  }

  hideAnother() {
    this.setState({ showAnotherModal: false })
  }

  render() {
    return (
      <div className="App">
        <h1>Application</h1>
        <p>The application doesn't take up the whole page</p>
        <p>Overflow is set to hidden</p>
        <ModalButton 
          text="Show Example Modal"
          action={this.showExample} 
        />
        <ModalButton
          text="Show Another Modal"
          action={this.showAnother}
        />
        <ExampleModal
          visible={this.state.showExampleModal}
          close={this.hideExample}
        />
        <AnotherModal
          visible={this.state.showAnotherModal}
          close={this.hideAnother}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
