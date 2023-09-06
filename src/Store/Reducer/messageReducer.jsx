import {ADD_LOG, RESET_LOG, SET_MSG} from "../Actions/messageActions.js";

const initialState = {
    message: '',
    logs: []
}

const messageReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MSG:
            return {
                ...state,
                message: action.payload
            }

        case ADD_LOG:
            return {
                ...state,
                logs: [
                    ...state.logs,
                    action.payload
                ]
            }

        case RESET_LOG:
            return {
                ...state,
                logs: []
            }


        default:
            return state;
    }
}

export default messageReducer