
import {ADD_HORSE} from "../Actions/horseActions.js";

const initialState = {
    horses: []
}

const horseReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_HORSE:
            return {
                ...state,
                horses: state.horses.concat([action.payload])
            }

        default:
            return state
    }
}

export default horseReducer