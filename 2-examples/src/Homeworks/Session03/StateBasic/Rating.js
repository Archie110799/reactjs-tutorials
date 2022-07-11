import React, { Component } from "react";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
const MAX_STAR = 5

export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: 0,
    };
  }

  setStar = (data, event) => {
    this.setState({
      star: data,
    });
  };

  renderStar = (star) => {
      let result = []

      for (let index = 0; index < star; index++) {
        result.push(<span onClick={this.setStar.bind(this, index+1)} className="d-inline-block mx-2" key={index}>
            <AiFillStar style={{color : 'red'}} />
            </span>);
      }

      for (let index = star; index < MAX_STAR; index++) {
        result.push(<span onClick={this.setStar.bind(this, index+1)} className="d-inline-block mx-2" key={index}><AiOutlineStar/></span>);
      }

      return result;
  };

  render() {
    return (
      <>
        <p>{this.state.star}</p>
        <p>{this.renderStar(this.state.star)}</p>
        <button onClick={this.setStar.bind(this, 4)}>Set Star</button>
      </>
    );
  }
}
