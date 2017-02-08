import React, { Component } from 'react';
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

class SingleCard extends Component{
    renderCards(column){
        column = this.props.column;
        return column.cards.map((card) =>{
            return <li
                className="cards-list-item"
                key={card.cardId}
            >
                card.value</li>
        });
    };
    render(){
        return(
            <div>
                {this.renderCards()}
            </div>
        )
    }
}
SingleCard = DragDropContext(HTML5Backend)(SingleCard);
export default SingleCard;