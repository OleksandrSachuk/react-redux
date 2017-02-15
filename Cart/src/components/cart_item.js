import React, {Component} from 'react';

export default class CartItem extends Component {
    cartItemRender() {
        return this.props.cart.map((cartItem) => {
            let cartItemTotalPrice = cartItem.price * cartItem.quantity;
            return (
                <tr key={cartItem.name}>
                    <td>{cartItem.name}</td>
                    <td>{cartItem.price} <span>USD</span></td>
                    <td>
                        <button
                            className="btn btn-primary decrease-quantity"
                            onClick={() => {this.props.decreaseCartItemQuantity(cartItem)}}
                        >-</button>
                        <span className="quantity">
                            {cartItem.quantity}
                        </span>
                        <button
                            className="btn btn-primary increase-quantity"
                            onClick={() => {this.props.increaseCartItemQuantity(cartItem)}}
                        >+</button>
                        </td>
                    <td>
                        <span className="cart-item-total-price">
                            {cartItemTotalPrice}
                        </span>
                        <span>USD</span>
                        <button
                            className="btn btn-danger remove-cart-item"
                            onClick={() => {this.props.removeCartItemQuantity(cartItem)}}
                        >-</button>
                    </td>
                </tr>
            )
        });
    }

    render() {
        return (
            <tbody>
            {this.cartItemRender()}
            </tbody>
        )
    }
};