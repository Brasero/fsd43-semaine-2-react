import {useContext, createContext, useReducer} from "react";
import panierReducer, {addAction, initialState, removeAction} from "../../Store/Reducer/panierReducer.jsx";

const panierContext = createContext();

export function ProvidePanier({children}) {
    const panier = useProvidePanier();
    return <panierContext.Provider value={panier}>{children}</panierContext.Provider>
}

export const usePanier = () => {
    return useContext(panierContext)
}

const useProvidePanier = () => {
    const [panier, dispatch] = useReducer(panierReducer, initialState)

    const addToCart = (elem) => {
        dispatch(addAction(elem))
    }

    const removeFromCart = (elem) => {
        dispatch(removeAction(elem))
    }

    return  {
        addToCart,
        removeFromCart,
        panier
    }

}