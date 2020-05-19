export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART_COUNT = "UPDATE_CART_COUNT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export function addToCart(product){
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function updateCartCount(count){
    return {
        type: UPDATE_CART_COUNT,
        payload: count
    }
}

export function removeFromCart(product){
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}