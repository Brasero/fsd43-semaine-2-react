import {ADD_USER, RESET_USER, SET_COUNT} from "../Actions/userActions.js";

const initialState = {
    users: [],
    counter: 0
}

const userReducer = (state = initialState, action) => {

    switch(action.type) {

        case ADD_USER:
            return {
                ...state,
                users: state.users.concat([action.payload])
            }

        case RESET_USER:
            return {
                ...state,
                users: initialState.users
            }

        case SET_COUNT:
            return {
                ...state,
                counter: state.counter + action.payload
            }

        default:
            return state;
    }
}

export default userReducer;