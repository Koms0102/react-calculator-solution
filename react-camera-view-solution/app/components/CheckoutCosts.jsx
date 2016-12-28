import Cart from './Cart';
import { Card } from 'material-ui/Card';
import React from 'react';

const CheckoutCosts = React.createClass({
  render() {
    return (
      <Card>
        <Cart
          cart={this.props.cart}
          handleRemoveAllFromCart={this.props.handleRemoveAllFromCart}
          checkoutList={false}
          checkoutBtn={false}
        />
      </Card>
    )
  }
});

export default CheckoutCosts;
