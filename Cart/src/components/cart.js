import React, { Component } from 'react';
import CartItem from './cart_item';
import CartTotalAmount from './cart_total_amount';

export default class Cart extends Component {
    render(){
        const { cart,
            increaseCartItemQuantity,
            decreaseCartItemQuantity,
            removeCartItemQuantity
        } = this.props;

        return(
            <div className="cart">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total price</th>
                    </tr>
                    </thead>
                        <CartItem
                            cart={cart}
                            increaseCartItemQuantity={increaseCartItemQuantity}
                            decreaseCartItemQuantity={decreaseCartItemQuantity}
                            removeCartItemQuantity={removeCartItemQuantity}
                        />
                </table>
                <CartTotalAmount cart={cart}/>
            </div>
        )
    }
};
