import './app.scss'
import './App.css'

import {Navigate, Route, Routes} from "react-router-dom";
import NavBar from "./component/NavBar/index.jsx";
import Acceuil from "./page/Acceuil/index.jsx";
import Panier from "./component/Panier/index.jsx";
import ProductDetail from "./page/ProductDetail/index.jsx";

function App() {

  return (
    <>
        <header className={'app_header'}>
            <NavBar />
        </header>
        <div className={'app_container'}>
            <Panier />
            <Routes>
                <Route path={'/'} element={<Acceuil />} />
                <Route path={'/detail/:name'} element={<ProductDetail />}/>
                <Route path={'*'} element={<Navigate to={'/'} /> } />
            </Routes>
        </div>
    </>
  )
}

export default App
