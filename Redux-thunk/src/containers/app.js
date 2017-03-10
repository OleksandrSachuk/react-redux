import React, {Component} from 'react';
import {connect} from 'react-redux';
import ItemList from '../components/item_list';
import * as actions from '../actions/index';

class App extends Component {
    render() {
        const {items, hasErrored, isLoading, itemsFetchData} = this.props;
        return (
            <div className="container">
                <br/>
                <div className="row">
                    <ItemList items={items} hasErrored={hasErrored} isLoading={hasErrored}
                              itemsFetchData={itemsFetchData}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

export default connect(mapStateToProps, actions)(App);
