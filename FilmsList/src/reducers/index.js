import { combineReducers } from 'redux';
import  ReducerWeather from './reducer_films';

const rootReducer = combineReducers({
  films: ReducerWeather
});

export default rootReducer;
