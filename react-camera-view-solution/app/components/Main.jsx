import axios from 'axios';
import Checkout from './Checkout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { Match } from 'react-router';
import Home from './Home';

const Main = React.createClass({
  getInitialState() {
    return {
      cart: [],
      cameras: [],
    }
  },

  componentDidMount() {
    axios.get('https://guarded-cliffs-16411.herokuapp.com/cameras')
      .then(res => {
        this.setState({cameras: res.data});
      });
  },

  handleAddToCart(camera) {
    let cart;
    let cameraMatch;
    let cartCamera;

    const cartSubMatch = this.state.cart.filter((item) => {
      if (item.id !== camera.id) {
        return true;
      }

      cameraMatch = item;
    });

    if (cameraMatch) {
      cartCamera = Object.assign({}, cameraMatch, { qty: ++cameraMatch.qty });
    } else {
      cartCamera = Object.assign({}, camera, { qty: 1 });
    }

    cart = cartSubMatch.concat(cartCamera);
    this.setState({ cart });
  },

  handleRemoveAllFromCart(cameraId) {
    const cart = this.state.cart.filter((item) => item.id !== cameraId);

    this.setState({ cart });
  },

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className="container">
            <Match pattern="/" exactly render={
              () => <Home
                { ...this.state }
                handleAddToCart={this.handleAddToCart}
                handleRemoveAllFromCart={this.handleRemoveAllFromCart}
              />
            }/>
            <Match pattern="/cart" render={
              () => <Checkout
                cart={this.state.cart}
              />
            } />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
});

export default Main;
