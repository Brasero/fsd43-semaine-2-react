import {createStore, combineReducers} from 'redux';
import panierReducer from "./Reducer/panierReducer.jsx";
import {composeWithDevTools} from "@redux-devtools/extension";
import productReducer from "./Reducer/productReducer.jsx";
import userReducer from "./Reducer/userReducer.jsx";

const store = createStore(combineReducers({
    panier: panierReducer,
    product: productReducer,
    user: userReducer
}),
    composeWithDevTools()
)

export default store;