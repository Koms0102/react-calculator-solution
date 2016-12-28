import React from 'react';

const CartItem = React.createClass({
  handleRemoveAllFromCart() {
    this.props.handleRemoveAllFromCart(this.props.camera.id);
  },

  render() {
    return (
      <li className="collection-item">
        <div>
          {this.props.camera.qty} <strong>{this.props.camera.title}</strong>
          <a className="secondary-content" href="#" onClick={this.handleRemoveAllFromCart}>
            <i className="material-icons">delete</i>
          </a>
        </div>
      </li>
    )
  }
});

export default CartItem;
