import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserList from './user_list';

class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
              <UserList/>
          </div>
      </div>
    );
  }
}
function maptStateToProps(state) {
    return{
        name: state.name
    }
}
export default connect(maptStateToProps)(App);