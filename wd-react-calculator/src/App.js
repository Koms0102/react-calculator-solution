import React from 'react';
import './App.css';
import Screen from './Screen/Screen'
import Buttons from './Buttons/Buttons'
import KeyPressDetector from './KeyPressDetector/KeyPressDetector'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      screen: ''
    }

    this.handleClickOperator = this.handleClickOperator.bind(this);
    this.handleClickNumber = this.handleClickNumber.bind(this);
    this.clearScreen = this.clearScreen.bind(this);
    this.displayError = this.displayError.bind(this);
    this.handleClickEquals =this.handleClickEquals.bind(this);
    this.handleKeyPress =this.handleKeyPress.bind(this);
  }

  handleClickNumber(num) {
    if(this.state.screen === 'Error') return;
    this.setState({screen: this.state.screen + num});
  }

  handleClickOperator(op) {
    if(this.state.screen === 'Error') return;
    this.setState({screen: this.state.screen + op});
  }

  clearScreen() {
    this.setState({screen: ''});
  }

  handleClickEquals() {
    if(this.state.screen === 'Error') return;

    const regexp = /^(\-?\d+)(x|\-|\+|\/)(\-?\d+)$/;

    const evaluate = {
      'x': (a, b) => a * b, 
      '/': (a, b) => a / b,
      '-': (a, b) => a - b,
      '+': (a, b) => a + b
    }

    const matches = this.state.screen.match(regexp); 

    if(matches === null) {
      this.displayError();
      return;
    }

    const number1 = parseInt(matches[1]);
    const number2 = parseInt(matches[3]);
    const operator = matches[2];

    const result = evaluate[operator](number1, number2);

    this.setState({screen: result})

  }

  displayError() {
    this.setState({screen: 'Error'});
  }

  handleKeyPress(key) {
    const ops = ['+', '-', 'x', '/'];
    if(ops.includes(key)) this.handleClickOperator(key)
    else if(key === 'Enter') this.handleClickEquals()
    else if(!isNaN(Number(key))) this.handleClickNumber(key)

  }

  render() {
    return (
      <KeyPressDetector
        handleKeyPress={this.handleKeyPress}
      >
        <div id="calculator">
          <Screen displayValue={this.state.screen} />
          <Buttons 
            handleClickNumber={this.handleClickNumber}
            handleClickOperator={this.handleClickOperator}
            handleClickEquals={this.handleClickEquals}
            handleClickClear={this.clearScreen}
          />
        </div>
      </KeyPressDetector>
    );
  }
}

export default App;
