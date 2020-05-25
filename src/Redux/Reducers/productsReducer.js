import {PUSH_PRODUCTS, TOAST_MESSAGE} from '../Actions/productsAction';

const initialState = {
    products: [],
    dataType: "",
    toastMessage: ""
}

export default function productsReducer(state = initialState,action){
    switch(action.type){
        case PUSH_PRODUCTS: {
            return {
                ...state,
                products: action.payload.data,
                dataType: action.payload.dataType
            }
        }
        case TOAST_MESSAGE: {
            return {
                ...state,
                toastMessage: action.payload
            }
        }
        default: {
            return state;
        }
    }
}