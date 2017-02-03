 import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props){
        this.props.createPost(props)
            .then(() => {
                this.context.router.push('/');
            });
    }
    render() {
        // const {fields: {title, categories, content}, handleSubmit} = this.props;
        const handleSubmit = this.props.handleSubmit;
        const title = this.props.fields.title;
        const categories = this.props.fields.categories;
        const content = this.props.fields.content;
        console.log(title, categories, content);

        return (
            <div className="row">
                <div className="col-xs-4 col-xs-offset-4">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <h1>Create a new Post</h1>

                        <div className={`form-group ${title.touched && title.invalid ? 'text-danger' : ''}`}>
                            <label>Title</label>
                            <input type="text" className="form-control" {...title} />
                            <div className="text-help">
                                {title.touched ? title.error : ''}
                            </div>
                        </div>

                        <div className={`form-group ${categories.touched && categories.invalid ? 'text-danger' : ''}`}>
                            <label>Categories</label>
                            <input type="text" className="form-control" {...categories} />
                            <div className="text-help">
                                {categories.touched ? categories.error : ''}
                            </div>
                        </div>

                        <div className={`form-group ${content.touched && content.invalid ? 'text-danger' : ''}`}>
                            <label>Content</label>
                            <textarea className="form-control" {...content} />
                            <div className="text-help">
                                {content.touched ? content.error : ''}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>

                        <Link to="/" className="btn btn-danger pull-right">Cancel</Link>
                    </form>
                </div>
            </div>
        );
    }
}


function validate(values) {
    const errors = {};

    if(!values.title){
        errors.title = 'Enter a title';
    }
    if(!values.categories){
        errors.categories = 'Enter a category';
    }
    if(!values.content){
        errors.content = 'Enter content';
    }
    return errors;
}
export default reduxForm({
    form: 'PostNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost })(PostsNew);