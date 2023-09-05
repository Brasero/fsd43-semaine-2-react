import {useContext, createContext, useReducer} from "react";
import panierReducer, {initialState} from "../../Store/Reducer/panierReducer.jsx";

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
    }

    const removeFromCart = (elem) => {
    }

    return  {
        addToCart,
        removeFromCart,
        panier
    }

}