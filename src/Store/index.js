import {createStore, combineReducers} from 'redux';
import panierReducer from "./Reducer/panierReducer.jsx";
import {composeWithDevTools} from "@redux-devtools/extension";
import productReducer from "./Reducer/productReducer.jsx";

const store = createStore(combineReducers({
    panier: panierReducer,
    product: productReducer
}),
    composeWithDevTools()
)

export default store;