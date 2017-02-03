import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchPosts }  from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PostIndex extends  Component{
    componentWillMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return this.props.posts.map((post) => {
            return(
                <Link to={"posts/" + post.id}>
                    <li className="list-group-item" key={post.id}>
                        <span className="pull-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </li>
                </Link>
                );
            }
        );
    }
    render(){
        return(
            <div className="row">
                <br/>
                <div className="text-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a post
                    </Link>
                </div>
                <h1>Created posts:</h1>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{posts: state.posts.all}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);