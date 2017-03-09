import React, { Component } from 'react';
import ItemList from '../components/item_list';

export default class App extends Component {
  render() {
    return (
      <div className="container">
          <br/>
          <div className="row">
              <ItemList />
          </div>
      </div>
    );
  }
}
