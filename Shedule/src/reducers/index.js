import { combineReducers } from 'redux';
import ChangeTime from './change_time';

const rootReducer = combineReducers({
    shedule: ChangeTime
});
export default rootReducer;