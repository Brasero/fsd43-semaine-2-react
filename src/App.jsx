import './app.scss'

import {Navigate, Route, Routes} from "react-router-dom";
import NavBar from "./component/NavBar/index.jsx";
import Acceuil from "./page/Acceuil/index.jsx";
import Panier from "./component/Panier/index.jsx";
import ProductDetail from "./page/ProductDetail/index.jsx";
import User from "./page/User/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectLogs} from "./Store/Selectors/messageSelectors.js";
import {resetLogAction} from "./Store/Actions/messageActions.js";


function App() {

    const logs = useSelector(selectLogs)
    const dispatch = useDispatch()

  return (
    <>
        <div className={'log_container'}>
            {
                logs.length > 0 ? (
                    <ul>
                        {
                            logs.map((log, index) => {
                                return <li key={`log-${index}`}>{log}</li>
                            })
                        }
                    </ul>
                ) : (
                    <span>Aucun log à afficher</span>
                )
            }
            <button role={'button'} onClick={() => dispatch(resetLogAction())} disabled={logs.length === 0}>Purge</button>
        </div>
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
