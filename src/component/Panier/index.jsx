import React, {useReducer} from 'react'

import ItemList from '../ItemList'

const initialState = []

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

const Panier = () => {

    const [panier, dispatch] = useReducer(panierReducer, initialState)

    const handleAdd = (elem) => {
        dispatch({
            type: 'addItem',
            payload: elem
        })
    }

    const handleRemove = (elem) => {
        dispatch({
            type: 'removeItem',
            payload: elem
        })
    }

    return (
        <div>
            <ItemList onAdd={handleAdd} />
            <ul>
                {
                    panier.length > 0 ? (panier.map((elem, index) => {
                        return <li key={index} onClick={() => handleRemove(elem)}> {elem.name} x {elem.quantite} </li>
                    })) : (
                        <span> Aucun article dans le panier </span>
                    )
                }
            </ul>
            <div>
                total d'article :
                    {
                        panier.length > 0 ? (
                            panier.reduce((acc, current) => {
                                return acc + current.quantite
                            }, 0) + ' articles'
                        ) : (
                            '0 article'
                        )
                    }
            </div>

            <div className='total'>
                total :
                {
                    panier.length > 0 ? (
                        panier.reduce((acc, current) => {
                            return acc + current.prix * current.quantite
                        }, 0) + ' €'
                    ) : (
                        '0 €'
                    )
                }
            </div>
        </div>
    )
}

export default Panier