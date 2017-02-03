import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends  Component{
    constructor(props){
        super(props);
        this.state = {
            comment: ''
        }
    }
    handleChange(event){
        this.setState({comment: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment: ''});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
                <h1 className="text-center">Add a comment</h1>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        value={this.state.comment}
                        onChange={this.handleChange.bind(this)} />
                </div>

                <button action="submit" className="btn btn-success pull-right">Submit Comment</button>
            </form>
        )
    }
}

export default connect(null, actions)(CommentBox);