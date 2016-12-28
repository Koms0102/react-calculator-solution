import React from 'react';

const App = React.createClass({
  getInitialState() {
    return { place: '' };
  },

  handleChange(event) {
    const nextState = { place: event.target.value };

    this.setState(nextState);
  },

  render() {
    const place = this.state.place.trim().toLowerCase();

    let message;

    if (place === 'seattle') {
      message = <ul className="no-bullets">
        <li style={{ margin: '10px' }}>
          <a href="http://www.soundersfc.com/">Go Sounders!</a>
        </li>
        <li style={{ margin: '10px' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/2/27/Seattle_Sounders_FC.svg"
            width="150"
          />
        </li>
      </ul>;
    }
    else if (place === 'portland') {
      message = <ul className="no-bullets">
        <li style={{ margin: '10px' }}>
          <a href="http://www.trailblazers.com/">Go Trail Blazers!</a>
        </li>
        <li style={{ margin: '10px' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/06/Portland_Trail_Blazers_alternate_logo.svg"
            width="150"
          />
        </li>
      </ul>;
    }
    else if (place === '') {
      message = <p>Go ahead, type in a city.</p>;
    }
    else {
      message = <p>{this.state.place}? Never heard of it.</p>;
    }

    return <div>
      <h1>
        {"What's your favorite city?"}
      </h1>
      <input
        onChange={this.handleChange}
        type="text"
        value={this.state.place}
      />
      <div>{message}</div>
    </div>;
  }
});

export default App;
