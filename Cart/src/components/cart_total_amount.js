import React, {Component} from 'react';

export default class CartTotalAmount extends Component {
    calculateCartTotalAmount() {
        let CartTotalPriceArray = [];
        this.props.cart.map((cartItem) => {
            return CartTotalPriceArray.push(cartItem.price * cartItem.quantity);
        });
        let CartTotalPrice = 0;
        CartTotalPriceArray.map((price) =>{
            CartTotalPrice = CartTotalPrice + price;
        });

        return CartTotalPrice;
    }

    render() {
        return (
            <div className="pull-right cart-total-amount">Total amount: {this.calculateCartTotalAmount()} USD</div>
        )
    }
}