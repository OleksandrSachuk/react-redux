import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import ColumnsList from './columns_list';

class App extends Component {
    constructor(props) {
        super(props);
    }

    onHandleClick() {
        this.props.createColumn();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <br/>
                    <button
                        className="btn btn-primary pull-right"
                        onClick={this.onHandleClick.bind(this)}>
                        Add a list...
                    </button>
                </div>
                <div className="row">
                    <ColumnsList />
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {columns: state.columns}
}

export default connect(mapStateToProps, actions)(App);