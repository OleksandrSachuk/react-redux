import { combineReducers } from 'redux';
import addColumnReducer from './column';
// import addCardReducer from './add_card';

const rootReducer = combineReducers({
    columns: addColumnReducer
    // cards: addCardReducer
});

export default rootReducer;