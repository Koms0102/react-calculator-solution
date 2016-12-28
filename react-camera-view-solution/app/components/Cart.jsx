import CartItems from './CartItems';
import React from 'react';

const Cart = React.createClass({
  getInitialState() {
    return {
      subtotal: 0,
      tax: 0,
      total: 0,
    }
  },

  componentWillMount() {
    this._calculateTotals(this.props);
  },

  componentWillReceiveProps(nextProps) {
    this._calculateTotals(nextProps);
  },

  _calculateTotals(props) {
    let subtotal = 0;
    let tax = 0;
    const taxRate = 0.07;
    let total = 0;

    for (let item of props.cart) {
      subtotal = subtotal + (item.price * item.qty);
    }

    tax = (subtotal * taxRate).toFixed(2);
    total = (subtotal + parseFloat(tax)).toFixed(2);
    subtotal = subtotal.toFixed(2);
    this.setState({ subtotal, tax, total });
  },

  render() {
    return (
      <div className="col s12 m4">
        <div className="card blue-grey">
          <div className="card-content white-text">
            <span className="card-title">Your Cart</span>

            { this.props.checkoutList &&
              <CartItems
                cart={this.props.cart}
                handleRemoveAllFromCart={this.props.handleRemoveAllFromCart}
              />
            }

            <div className="row">
              <div className="col s6">
                Subtotal
              </div>
              <div className="col s6 right-align">
                ${this.state.subtotal}
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                Tax
              </div>
              <div className="col s6 right-align">
                ${this.state.tax}
              </div>
            </div>
            <div className="row total">
              <div className="col s6">
                Total
              </div>
              <div className="col s6 right-align">
                ${this.state.total}
              </div>
            </div>

            { this.props.checkoutBtn &&
              <div className="card-action">
                <a className="waves-effect waves-light btn">CHECKOUT</a>
              </div>
            }

          </div>
        </div>
      </div>
    )
  }
});

export default Cart;
