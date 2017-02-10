import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ClearButton extends Component {

    onClearAllClick(){
        this.props.clearAllTime();
    }
    render(){
        return (
            <button
                className="btn btn-danger clear_button"
                onClick={this.onClearAllClick.bind(this)}
            >Clear</button>
        )
    }
};

export default connect(null, actions)(ClearButton);