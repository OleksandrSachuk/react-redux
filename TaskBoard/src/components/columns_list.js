import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
// import SingleColumn from './single_column';

class ColumnsList extends Component{
    constructor(props){
        super(props);
    }
    renderList(){
        return  this.props.columns.map((column) => {
            return (
                <div key={column.columnId} className="single-column">
                    <h3>{column.title}{column.columnId}</h3>
                    <ul className="cards-list">{this.renderCards(column)}</ul>
                    <span
                        className="add-card"
                        onClick={() => this.props.addCard(column.columnId)}
                    >Add a card ...</span>
                </div>
            )
        });
    }
    renderCards(column){
        return column.cards.map((card) =>{
            return <li className="cards-list-item">card.value</li>
        });
    }
    render(){
        return(
            <div>
                {this.renderList()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {columns: state.columns}
}

export default connect(mapStateToProps, actions)(ColumnsList);