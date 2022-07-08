import React, { Component } from "react";

export default class StateClass extends Component {
  constructor(props) {
    // Goi ham khoi tao cua tk Cha (extends Component)
    super(props);
    // state
    this.state = {
      color: "Black",
    };

    this.setColor = this.setColor.bind(this);
  }

  setColor() {
    this.setState({ color: "blue" });
  }

  setColor1 = (event) => {
    this.setState({ color: "Black" });
  };

  render() {
    function handleClick(e) {
      e.preventDefault();
    }
    return (
      <div>
        {this.state.color}
        <button onClick={this.setColor}>Change Black</button>
        <button onClick={() => this.setState({ color: "Red" })}>
          Change Red
        </button>
      </div>
    );
  }
}
