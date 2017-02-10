import * as initialState from '../data/initial_shedule.json';
import { CLEAR_ALL_TIME, CLEAR_DAY_TIME, FILL_DAY_TIME } from '../actions/types';

export default function (state = initialState, action){
   switch(action.type){
       case CLEAR_ALL_TIME:
           return Object.assign({}, state, {
               ...action.payload
           });
       case CLEAR_DAY_TIME:
           const NewStateClear = {};
           Object.assign(NewStateClear, state);
           for(let key in NewStateClear) {
               if (key === action.day) {
                   NewStateClear[key] = action.payload;
               }
            }
           return NewStateClear;
       case FILL_DAY_TIME:
           const NewStateFill = {};
           Object.assign(NewStateFill, state);
           for(let key in NewStateFill) {
               if (key === action.day) {
                   NewStateFill[key] = action.payload;
               }
           }
           return NewStateFill;
       default: return state;
   }
}
