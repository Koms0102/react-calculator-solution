import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    )
  }
});

export default Header;
