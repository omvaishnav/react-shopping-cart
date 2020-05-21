import {ADD_TO_CART, UPDATE_CART_COUNT, REMOVE_FROM_CART} from '../Actions/cartAction';

const initialState = {
    cart: [],
    cartCount: 0
}

export default function cartReducer(state = initialState,action){
    switch(action.type){
        case ADD_TO_CART: {
            const productItem = action.payload;
            const cart = state.cart;

            const existingProductIndex = findProductIndex(cart,productItem);

            const udpatedCart = existingProductIndex >= 0 ? updateProductQty(cart,productItem) : [...cart,productItem];

            return {
                ...state,
                cart: udpatedCart
            }
            
        }
        case REMOVE_FROM_CART: {
            const productItem = action.payload.product;
            const removalType = action.payload.removalType;
            const cart = state.cart;

            const existingProductIndex = findProductIndex(cart,productItem);
            let updatedCart;
            
            if(removalType === "decrease"){
                if(cart[existingProductIndex].qty > 1) {
                    updatedCart = updateProductQty(cart,productItem,"remove")
                } else {
                cart.splice(existingProductIndex,1)
                updatedCart = cart
                }
            } else if(removalType === "remove"){
                cart.splice(existingProductIndex,1)
                updatedCart = cart
            }
            
            return {
                ...state,
                cart: updatedCart
            }
        }
        case UPDATE_CART_COUNT: {
            return  {
                ...state,
                cartCount: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

const findProductIndex = (cart,product) => {
    return cart.findIndex(p => p.name === product.name)
};

const updateProductQty = (cart,product,action) => {
    const productIndex = findProductIndex(cart,product);

    const updatedProducts = [...cart];
    const existingProducts = updatedProducts[productIndex];

    const updateQtyProduct = {
        ...existingProducts,
        qty: action === "remove" ? existingProducts.qty - 1 : existingProducts.qty + 1
    };

    updatedProducts[productIndex] = updateQtyProduct;

    return updatedProducts;
}