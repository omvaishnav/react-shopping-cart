export const PUSH_PRODUCTS = "PUSH_PRODUCTS";
export const TOAST_MESSAGE = "TOAST_MESSAGE";

export function pushProductsToStore(products){
    return {
        type: PUSH_PRODUCTS,
        payload: products
    }
}

export function updateToastMessage(message){
    return {
        type: TOAST_MESSAGE,
        payload: message
    }
}