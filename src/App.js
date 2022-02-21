
import React, { Component } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs";


class App extends Component {
  constructor (props){
    super(props);
    this.state ={input: ""}
  }


updateInput = val => {
  this.setState({input: this.state.input + val});
}
//updates the state, update input to be equal to current input plus val

handleEqual = () => {
  this.setState({input: math.evaluate(this.state.input)})
}

  render(){
  return (
    <div className="wrapper-for-footer">
      <div className="App">
     <div className="container">
       <Input input={this.state.input} />
      <div className="row">
        <Button handleClick={this.updateInput}>7</Button>
        <Button handleClick={this.updateInput}>8</Button>
        <Button handleClick={this.updateInput}>9</Button>
        <Button handleClick={this.updateInput}>/</Button>
        
      </div>
      <div className="row">
        <Button handleClick={this.updateInput}>4</Button>
        <Button handleClick={this.updateInput}>5</Button>
        <Button handleClick={this.updateInput}>6</Button>
        <Button handleClick={this.updateInput}>*</Button>
      </div>
      <div className="row">
        <Button handleClick={this.updateInput}>1</Button>
        <Button handleClick={this.updateInput}>2</Button>
        <Button handleClick={this.updateInput}>3</Button>
        <Button handleClick={this.updateInput}>+</Button>
      </div>
      <div className="row">
        <Button handleClick={this.updateInput}>.</Button>
        <Button handleClick={this.updateInput}>0</Button>
        <Button handleClick={this.handleEqual}>=</Button>
        <Button handleClick={this.updateInput}>-</Button>
      </div>
      <div className="row">
<ClearButton handleClear={()=> this.setState({input: ""})}>Clear</ClearButton>
      </div>
    </div>
    
    </div>
     <Footer />
    </div>

  );
}
}

export default App;
