import {CLEAR_DAY_TIME } from '../actions/types';

export default function (state = {}, action){
    switch(action.type){
        case CLEAR_DAY_TIME: {
            console.log(action.type);
            return state
        }
        default:
            return state
    }
}