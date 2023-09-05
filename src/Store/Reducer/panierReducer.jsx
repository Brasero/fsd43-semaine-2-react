
export const initialState = [];

export const addAction = (elem) => {
    return {
        type: 'addItem',
        payload: elem
    }
}

export const removeAction = (elem) => {
    return {
        type: 'removeItem',
        payload: elem
    }
}

const panierReducer = (state, action) => {


    switch(action.type) {
        case 'addItem':
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

        case 'removeItem':
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
