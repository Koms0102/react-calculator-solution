import Cart from './Cart';
import Catalog from './Catalog';
import React from 'react';

const Home = React.createClass({
  render() {
    return (
      <div>
        <h1>Cameras</h1>
        <div className="row">
          <Catalog
            cameras={this.props.cameras}
            handleAddToCart={this.props.handleAddToCart}
          />
          <Cart
            cart={this.props.cart}
            handleRemoveAllFromCart={this.props.handleRemoveAllFromCart}
            checkoutList={true}
            checkoutBtn={true}
          />
        </div>
      </div>
    )
  }


});

export default Home;
