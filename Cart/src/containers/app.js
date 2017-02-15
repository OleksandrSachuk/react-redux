import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsList from '../components/products_list';
import Cart from '../components/cart';
import * as actions from '../actions';

class App extends Component {
  render() {
      const { fetchProductsList,
          addToCart,
          products,
          cart,
          increaseCartItemQuantity,
          decreaseCartItemQuantity,
          removeCartItemQuantity
      } = this.props;

    return (
      <div className="container">
          <br/>
          <div className="row">
              <Cart
                  cart={cart}
                  increaseCartItemQuantity={increaseCartItemQuantity}
                  decreaseCartItemQuantity={decreaseCartItemQuantity}
                  removeCartItemQuantity={removeCartItemQuantity}
              />
          </div>
          <div className="row">
              <ProductsList
                  fetchProductsList={fetchProductsList}
                  products={products}
                  addToCart={addToCart} />
          </div>
      </div>
    );
  }
}
function maptStateToProps(state) {
    return{
        products: state.products,
        cart: state.cart
    }
}
export default connect(maptStateToProps, actions)(App);
