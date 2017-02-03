import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
          <Header />
        <div className="container">
          <h1>To get access to Resources page you should Sing In</h1>
            {this.props.children}
        </div>
      </div>
    );
  }
}
