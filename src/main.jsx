import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import {ProvidePanier} from "./utils/hook/usePanier.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ProvidePanier>
        <App />
    </ProvidePanier>
  </Router>,
)
