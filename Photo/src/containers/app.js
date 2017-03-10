import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import ItemList from './item_list';
import AutoRefreshButton from '../components/auto_refresh_button';

class App extends Component {
  render() {
      const {items, hasErrored, isLoading, itemsFetchData} = this.props;
    return (
      <div className="container">
          <div className="row">
              <AutoRefreshButton isLoading={isLoading} itemsFetchData={itemsFetchData} />
          </div>
          <div className="row">
              <ItemList items={items} hasErrored={hasErrored} isLoading={isLoading} itemsFetchData={itemsFetchData} />
          </div>
      </div>
    );
  }
}
function mapStateToProps (state) {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

export default connect(mapStateToProps, actions)(App);