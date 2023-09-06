import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import panierReducer from "./Reducer/panierReducer.jsx";
import {composeWithDevTools} from "@redux-devtools/extension";
import productReducer from "./Reducer/productReducer.jsx";
import userReducer from "./Reducer/userReducer.jsx";
import horseReducer from "./Reducer/horseReducer.jsx";
import thunk from "redux-thunk";
import messageReducer from "./Reducer/messageReducer.jsx";
import {ADD_USER} from "./Actions/userActions.js";
import {setMsgAction} from "./Actions/messageActions.js";
import {ADD_HORSE} from "./Actions/horseActions.js";
import logMiddleware from "./middleware/logMiddleware.js";

const middleware = (store) => (next) => (action) => {

    const nextAction = next(action)

    switch (action.type) {
        case ADD_USER:
            store.dispatch(setMsgAction(`Le chevalier ${action.payload.name} à été ajouté.`))
            break

        case ADD_HORSE:
            store.dispatch(setMsgAction(`La monture ${action.payload.name} à été ajoutée.`))
            break

        default:
            break
    }

    return nextAction
}


const store = createStore(combineReducers({
    panier: panierReducer,
    product: productReducer,
    user: userReducer,
    horse: horseReducer,
    message: messageReducer
}),
    composeWithDevTools(
        applyMiddleware(thunk, logMiddleware)
    )
)

export default store;