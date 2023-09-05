import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Form from './component/Form';
import Panier from './component/Panier'
import {Route, Routes} from "react-router-dom";
import NavBar from "./component/NavBar/index.jsx";
import DynamicComponent from "./component/DynamicComponent/index.jsx";
import NotFound from "./component/NotFound/index.jsx";
import DetailProduct from "./component/DetailProduct/index.jsx";

function App() {

  return (
    <>
        <NavBar />
        <Routes>
            <Route path={'/'} element={<Panier />} />
            <Route path={'/form'} element={<Form/>} />
            <Route path={'/form/:monparam'} element={<DynamicComponent />}>
                <Route path={'page1'} element={<Panier />} />
                <Route path={'page2'} element={<Form />} />
            </Route>
            <Route path={'/detailProduct'} element={<DetailProduct/>}/>
            <Route path={'*'} element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App
