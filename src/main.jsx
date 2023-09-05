import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import {ProvidePanier} from "./utils/hook/usePanier.jsx";
import {Provider} from 'react-redux';
import store from "./Store/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ProvidePanier>
        <Provider store={store}>
            <App />
        </Provider>
    </ProvidePanier>
  </Router>,
)
