import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import {Link  } from 'react-router';

class PostsShow extends Component{
    static contextTypes = {
    router: PropTypes.object
    };

    componentWillMount(){
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick(){
        this.props.deletePost(this.props.params.id)
            .then(() => {this.context.router.push('/');});
    }
    render(){
        const post = this.props.post;

        if(!post){
            return <div>Loading...</div>
        }
        return(
            <div className="row">
                <br/>
                <h1>{post.title}</h1>
                <h3>Categories: {post.categories}</h3>
                <p>{post.content}</p>
                <Link to="/" className="btn btn-default btn-primary" >Back</Link>
                <button
                    className="btn btn-danger pull-right"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete post
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{ post: state.posts.post }
}
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);