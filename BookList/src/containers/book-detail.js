import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
    render(){
        if(!this.props.book) {
            return(
                <h1>Select book to get started.</h1>
            )
        }
        return(
            <div>
                <h2>Details for:</h2>
                <h3>Title: {this.props.book.title}</h3>
                <h4>Pages: {this.props.book.pages}</h4>
            </div>
        );
    }
}
function maptStateToProps(state) {
    return{
        book: state.activeBook
    }
}
 export default connect(maptStateToProps)(BookDetail);
