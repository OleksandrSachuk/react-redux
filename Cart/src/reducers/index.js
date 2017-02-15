import {combineReducers} from 'redux';
import productsListReducer from './products_list_reducer';
import addToCartReducer from './cart_reducer';

const rootReducer = combineReducers({
    products: productsListReducer,
    cart: addToCartReducer
});

export default rootReducer;
