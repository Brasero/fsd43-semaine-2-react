import {ADD_USER, RESET_USER} from "../Actions/userActions.js";

const initialState = {
    users: []
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

        default:
            return state;
    }
}

export default userReducer;