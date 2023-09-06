import {SET_MSG} from "../Actions/messageActions.js";

const initialState = {
    message: ''
}

const messageReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MSG:
            return {
                ...state,
                message: action.payload
            }


        default:
            return state;
    }
}

export default messageReducer