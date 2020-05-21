export const PUSH_PRODUCTS = "PUSH_PRODUCTS";

export function pushProductsToStore(products){
    return {
        type: PUSH_PRODUCTS,
        payload: products
    }
}
