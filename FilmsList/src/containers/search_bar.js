import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchFilms} from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state ={
            term: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        }

    onInputChange(event){
        this.setState({
            term: event.target.value
        });
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchFilms(this.state.term);
        this.setState({term: ''});
    }
    render(){
        return(
            <form className="form-inline" onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Find film"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                </div>
                    <button type="submit" className="btn btn-default">Submit</button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({fetchFilms}, dispatch);
}
export default connect(null,mapDispatchToProps)(SearchBar);