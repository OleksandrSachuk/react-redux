import React, { Component } from 'react';

export default class ItemList extends Component {
    componentDidMount() {
        this.props.itemsFetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }
    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <div>
                <h1>List of items:</h1>
                <ul>
                    {this.props.items.map((item) => (
                        <li key={item.id}>
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}