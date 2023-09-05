import {PANIER_ADD, PANIER_REMOVE} from "../Actions/panierActions.js";

export const initialState = [];



const panierReducer = (state = initialState, action) => {


    switch(action.type) {
        case PANIER_ADD:
            const elem = state.findIndex((item) => item.name === action.payload.name)
            let copy;
            if(elem === -1) {
                copy = [...state]
                copy.push({...action.payload, quantite: 1})
            } else {
                copy = [...state]
                copy[elem].quantite = copy[elem].quantite + 1
                console.log(copy[elem])
            }

            return [
                ...copy
            ]

        case PANIER_REMOVE:
            const element = state.findIndex((item) => item.name === action.payload.name)
            let copyy = [...state]
            if(copyy[element].quantite === 1) {
                copyy = copyy.filter((item) => item.name !== action.payload.name)
            } else {
                copyy[element].quantite--;
            }

            return [
                ...copyy
            ]



        default:
            return state
    }
}

export default panierReducer;
