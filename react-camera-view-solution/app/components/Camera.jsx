import React from 'react';

const Camera = React.createClass({
  handleAddToCart() {
    this.props.handleAddToCart(this.props.camera);
  },

  starFilter(num) {
    return '*'.repeat(num);
  },

  render() {
    return (
      <div>
        <h3>{this.props.camera.title}</h3>
        <img src={this.props.camera.image} />
        <h4>Price: ${this.props.camera.price}</h4>
        <h5>Rating: {this.starFilter(this.props.camera.rating)}</h5>
        <a className="waves-effect waves-light btn" onClick={this.handleAddToCart}>ADD TO CART</a>
      </div>
    )
  }
});

export default Camera;
