import CheckoutCosts from './CheckoutCosts';
import CheckoutForm from './CheckoutForm';
import React from 'react';

const Checkout = React.createClass({
  render() {
    return (
      <div className="container">
        <CheckoutCosts
          cart={this.props.cart}
          handleRemoveAllFromCart={this.props.handleRemoveAllFromCart}
        />
        <CheckoutForm />
      </div>
    )
  }
});

export default Checkout;
