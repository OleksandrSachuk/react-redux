import { CREATE_COLUMN, ADD_CARD } from '../actions/types';

export default function (state = [], action) {
    switch(action.type){
        case CREATE_COLUMN:
            return [...state, action.payload];
        case ADD_CARD:{
            return state.map((column) => {
                if(column.columnId == action.payload.columnId){
                    return Object.assign({}, column, column.cards.push(action.payload))
                }
                return column;
            });
        }
    }

    return state;
}