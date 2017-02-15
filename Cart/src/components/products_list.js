import React, { Component } from 'react';

export default class ProductsList extends Component{
    componentWillMount(){
        this.props.fetchProductsList();
    }
    renderProductsList(){
        return this.props.products.map((product) => {
            return(
                <div className="card card-block" key={product.id}>
                    <div className="card-block-img">
                        <img className="card-img-top" src="images/new-product.jpg" alt="product" />
                    </div>
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.price} <span>USD</span></p>
                    <button
                        className="btn btn-primary"
                        onClick={() => {this.props.addToCart(product)}}
                    >Add to cart</button>
                </div>
            )
        });
    }


    render(){
        return(
            <div className="products-list">
                {this.renderProductsList()}
            </div>
        )
    }
}
