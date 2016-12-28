import React from 'react';

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

const App = React.createClass({
  getInitialState() {
    return { screen: '' };
  },

  handleChange(event) {
    const nextState = { screen: event.target.value };

    this.setState(nextState);
  },

  handleClickClear() {
    this.setState({ screen: '' });
  },

  handleClickEquals() {
    if (this.state.screen === 'Error') {
      return;
    }

    const regexp = /^(\-?\d+)(x|\/|\+|\-)(\-?\d+)$/;

    const matches = this.state.screen.match(regexp);

    if (matches === null) {
      this.setState({ screen: 'Error' });

      return;
    }

    const operand1 = parseInt(matches[1]);
    const operand2 = parseInt(matches[3]);
    const operator = matches[2];
    const evaluate = {
      x: (aa, bb) => aa * bb,
      '+': (aa, bb) => aa + bb,
      '-': (aa, bb) => aa - bb,
      '*': (aa, bb) => aa * bb,
      '/': (aa, bb) => aa / bb
    };
    const total = evaluate[operator](operand1, operand2);
    const nextScreen = total.toString();

    this.setState({ screen: nextScreen });
  },

  handleClickOp(event) {
    if (this.state.screen === 'Error') {
      return;
    }

    const nextScreen = this.state.screen + event.target.textContent;

    this.setState({ screen: nextScreen });
  },

  handleKeyDown(event) {
    if (event.which === ENTER_KEY) {
      this.handleClickEquals();
    }
    else if (event.which === ESCAPE_KEY) {
      event.preventDefault();
      this.handleClickClear();
    }
  },

  render() {
    return <div id="calculator">
      <div id="screen-container">
        <input
          id="screen"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={this.state.screen}
        />
      </div>

      <div id="button-container">
        <div className="buttons">
          <span
            className="operator"
            id="cancel"
            onClick={this.handleClickClear}
          >
            C
          </span>
          <span
            className="operator"
            onClick={this.handleClickOp}
          >
            /
          </span>
          <span
            className="operator"
            onClick={this.handleClickOp}
          >
            x
          </span>
          <span onClick={this.handleClickOp}>7</span>
          <span onClick={this.handleClickOp}>8</span>
          <span onClick={this.handleClickOp}>9</span>
          <span
            className="operator"
            onClick={this.handleClickOp}
          >
            -
          </span>
          <span onClick={this.handleClickOp}>4</span>
          <span onClick={this.handleClickOp}>5</span>
          <span onClick={this.handleClickOp}>6</span>
          <span
            className="operator"
            onClick={this.handleClickOp}
          >
            +
          </span>
          <span onClick={this.handleClickOp}>1</span>
          <span onClick={this.handleClickOp}>2</span>
          <span onClick={this.handleClickOp}>3</span>
          <span
            className="operator"
            id="calc"
            onClick={this.handleClickEquals}
          >
            =
          </span>
          <div className="l-row">
            <span id="zero" onClick={this.handleClickOp}>0</span>
          </div>
        </div>
      </div>
    </div>;
  }
});

export default App;
