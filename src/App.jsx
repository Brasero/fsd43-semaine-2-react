import './app.scss'
import './App.css'

import {Navigate, Route, Routes} from "react-router-dom";
import NavBar from "./component/NavBar/index.jsx";
import Acceuil from "./page/Acceuil/index.jsx";
import Panier from "./component/Panier/index.jsx";
import ProductDetail from "./page/ProductDetail/index.jsx";
import panierReducer, {addAction, initialState, removeAction} from "./Store/Reducer/panierReducer.jsx";
import {useReducer} from "react";


function App() {

    const [panier, dispatch] = useReducer(panierReducer, initialState);

    const addToCart = (elem) => {
        dispatch(addAction(elem))
    }

    const removeFromCart = (elem) => {
        dispatch(removeAction(elem))
    }

  return (
    <>
        <header className={'app_header'}>
            <NavBar />
        </header>
        <div className={'app_container'}>
            <Panier state={panier} remove={removeFromCart} />
            <Routes>
                <Route path={'/'} element={<Acceuil addToCart={addToCart} />} />
                <Route path={'/detail/:name'} element={<ProductDetail addToCart={addToCart} />}/>
                <Route path={'*'} element={<Navigate to={'/'} /> } />
            </Routes>
        </div>
    </>
  )
}

export default App
