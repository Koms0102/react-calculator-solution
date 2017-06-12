import React from 'react';
import ReactDOM from 'react-dom';

const Focus = React.createClass({
  getInitialState() {
    return { value: "I'm blurred :(" };
  },

  handleBlur() {
    const nextValue = "I'm blurred :(";

    this.setState({ value: nextValue });
  },

  handleFocus() {
    const nextValue = "I'm focused :D";

    this.setState({ value: nextValue });
  },

  render() {
    return <div>
      <input
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        readOnly={true}
        value={this.state.value}
      />
    </div>;
  }
});

ReactDOM.render(
  <Focus />,
  document.getElementById('app')
);
