import {PUSH_PRODUCTS} from '../Actions/productsAction';

const initialState = {
    products: [],
    dataType: ""
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
        default: {
            return state;
        }
    }
}