import { CREATE_COLUMN, ADD_CARD }  from './types';

let currnetColumnId = 0;

export function createColumn(){
    currnetColumnId++;
    const column = {
        'columnId': currnetColumnId,
        'title': 'Column',
        'cards': []
    };
    return{
        type: CREATE_COLUMN,
        payload: column
    }
}

let cardId = 0;
export function addCard(columnId){
    cardId++;
    const card = {
        'cardId': cardId,
        'columnId': columnId,
        'value': 'card'
    };
    return{
        type: ADD_CARD,
        payload: card
    }
}