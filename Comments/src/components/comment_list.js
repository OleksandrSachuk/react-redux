import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {

    const list = props.comments.map(comment => <li key={comment}>{comment}</li>);
    if(list){
        return (
            <ul className="comment-list">
                {list}
            </ul>
        )
    } else {
        return (
            <div>Empty</div>
        )
    }

};

function mapStateToProps(state) {
    return {comments: state.comments};
}
export default connect(mapStateToProps)(CommentList);