import {SET_PRODUCT} from "../Actions/productActions.js";

const initialState = {
    category: null,
    items: []
}

const productReducer = (state = initialState, action) => {

    switch(action.type) {

        case SET_PRODUCT:
            return {
                ...state,
                items: [...action.payload]
            }

        default:
            return state
    }
}

export default productReducer