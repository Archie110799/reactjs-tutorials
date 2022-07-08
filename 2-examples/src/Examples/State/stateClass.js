import React, { Component } from "react";

export default class StateClass extends Component {
  constructor(props) {
    // Goi ham khoi tao cua tk Cha (extends Component)
    super(props);
    // state
    this.state = {
      color: "Black",
    };
  }
  render() {
    return (
      <div>
        {this.state.color}
        <button onClick={() => this.setState({color : 'Black'})}>Change Black</button>
        <button onClick={() => this.setState({color : 'Red'})}>Change Red</button>
      </div>
    );
  }
}
