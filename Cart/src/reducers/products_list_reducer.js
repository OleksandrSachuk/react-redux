import { FETCH_PRODUCTS_LIST } from '../actions/types';

export default function (state = [], action) {
    switch(action.type){
        case FETCH_PRODUCTS_LIST:
            return [ ...state, ...action.payload ];
        default:
            return state;
    }
}