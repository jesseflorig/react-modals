import React, { Component } from "react";
import ReactDOM from "react-dom";
import ExampleModal from "./components/ExampleModal";
import AnotherModal from "./components/AnotherModal";
import ModalButton from "./components/ModalButton";
import "./styles.css";

const rootElement = document.getElementById("root");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeModal: null,
      showModal: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(modal) {
    this.setState({ activeModal: modal });
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  render() {
    const modal = this.state.showModal ? this.state.activeModal : null;
    return (
      <div className="App">
        <h1>Application</h1>
        <p>The application doesn't take up the whole page</p>
        <p>Overflow is set to hidden</p>
        <ModalButton
          text="Show Example Modal"
          action={() => {
            this.showModal(<ExampleModal close={this.hideModal} />);
          }}
        />
        <ModalButton
          text="Show Another Modal"
          action={() => {
            this.showModal(<AnotherModal close={this.hideModal} />);
          }}
        />
        {modal}
      </div>
    );
  }
}

ReactDOM.render(<App />, rootElement);
