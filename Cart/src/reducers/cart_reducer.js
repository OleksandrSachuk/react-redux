import { ADD_TO_CART,
    INCREASE_CART_ITEM_QUANTITY,
    DECREASE_CART_ITEM_QUANTITY,
    REMOVE_CART_ITEM
} from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case ADD_TO_CART:
            if (state.length === 0){
                return [...state, action.payload]
            } else {
                let equal;
                state.map((cartItem) => {
                    if(cartItem.id === action.payload.id){
                        equal = true;
                    }
                });
                if (equal){
                    return state;
                } else {
                    return [...state, action.payload]
                }

            }
        case INCREASE_CART_ITEM_QUANTITY:
            return [...state, ...action.payload];
        case DECREASE_CART_ITEM_QUANTITY:
            return [...state, ...action.payload];
        case REMOVE_CART_ITEM:
            return state.filter((cartItem) => {
                return cartItem.id !== action.payload.id
            });
        default:
            return state;
    }
}