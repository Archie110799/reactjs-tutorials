import React, { Component } from "react";

export default class EventHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red",
    };

    //register event
    this.setColor = this.setColor.bind(this)
  }

  setColor(){
    console.log("setColor");
    this.setState( { color : 'blue' } )
  }

  setColorBind = (data, event) =>{
    console.log(data, event.target);
  }

  setColorArrowFunc = (event) => {
    console.log(event.target);
    this.setState( { color : 'blue' } )
  }

  setColorArrowFuncParamsE = (data,event) => {
    console.log(data, event.target);
  }

 
  render() {
    function handClick(e) {
        console.log('clicked');
        e.preventDefault();
    }
    return (
      <>
        <div style={{ fontSize: 100 }}>{this.state.color}</div>
        <button onClick={handClick}>preventDefault</button>
        <button onClick={this.setColor}>Set Blue Bind</button>
        <button onClick={this.setColorArrowFunc}>Set BLue Arrow func</button>
        <button onClick={()=> console.log('inline')}>Event Inline</button>
        
        <button onClick={(e)=> this.setColorArrowFuncParamsE(1, e)}>setColorArrowFuncParamsE</button>
        <button onClick={this.setColorBind.bind(this, 1)}>setColorBind</button>
      </>
    );
  }
}