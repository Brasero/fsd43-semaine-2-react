import './app.scss'

import {Navigate, Route, Routes} from "react-router-dom";
import NavBar from "./component/NavBar/index.jsx";
import Acceuil from "./page/Acceuil/index.jsx";
import Panier from "./component/Panier/index.jsx";
import ProductDetail from "./page/ProductDetail/index.jsx";
import panierReducer, {initialState} from "./Store/Reducer/panierReducer.jsx";
import {useReducer} from "react";
import User from "./page/User/index.jsx";


function App() {


  return (
    <>
        <header className={'app_header'}>
            <NavBar />
        </header>
        <div className={'app_container'}>
            <Panier/>
            <Routes>
                <Route path={'/'} element={<Acceuil />} />
                <Route path={'/detail/:name'} element={<ProductDetail />}/>
                <Route path={'*'} element={<Navigate to={'/'} /> } />
                <Route path={'/user'} element={<User/>} />
            </Routes>
        </div>
    </>
  )
}

export default App
