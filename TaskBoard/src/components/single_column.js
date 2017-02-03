import React, { Component } from 'react';

const SingleColumn = (column) =>{
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
};

export default SingleColumn;