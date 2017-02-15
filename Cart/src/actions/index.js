import { FETCH_PRODUCTS_LIST,
    ADD_TO_CART,
    INCREASE_CART_ITEM_QUANTITY,
    DECREASE_CART_ITEM_QUANTITY,
    REMOVE_CART_ITEM
} from './types';

export function fetchProductsList() {
    const InitialProductsList = [
        {
            id: 1,
            name: "Product name-1",
            price: 50,
            quantity: 1
        },
        {
            id: 2,
            name: "Product name-2",
            price: 30,
            quantity: 1
        },
        {
            id: 3,
            name: "Product name-3",
            price: 20,
            quantity: 1
        }
    ];

    return {
        type: FETCH_PRODUCTS_LIST,
        payload: InitialProductsList
    };
}

export function addToCart(product){
    return{
        type: ADD_TO_CART,
        payload: product
    }
}

export function increaseCartItemQuantity(cartItem) {
    return{
        type: INCREASE_CART_ITEM_QUANTITY,
        payload: ++cartItem.quantity
    }
}

export function decreaseCartItemQuantity(cartItem) {
    if(cartItem.quantity > 1){
        return{
            type: DECREASE_CART_ITEM_QUANTITY,
            payload: --cartItem.quantity
        }
    } else {
        return{
            type: DECREASE_CART_ITEM_QUANTITY,
            payload: cartItem.quantity
        }
    }
}

export function removeCartItemQuantity(cartItem) {
    return{
        type: REMOVE_CART_ITEM,
        payload: cartItem
    }
}