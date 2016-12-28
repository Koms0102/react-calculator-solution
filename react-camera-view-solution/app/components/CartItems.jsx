import CartItem from './CartItem';
import React from 'react';

const CartItems = React.createClass({
  render() {
    const cartItems = this.props.cart.map((item, index) => {
      return (
        <CartItem
          camera={item}
          key={index}
          handleRemoveAllFromCart={this.props.handleRemoveAllFromCart}
        />
      )
    });

    return (
      <div>
        { cartItems.length === 0 ?
          <div></div>
          :
          <ul className="collection black-text">
            { cartItems }
          </ul>
        }
      </div>
    )
  }
});

export default CartItems;
