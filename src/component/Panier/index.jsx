import React, {useReducer} from 'react'
import './panier.scss'
import {useLocation, useOutletContext} from "react-router-dom";

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
        <div className={'panier_container'}>
            <ul className={'panier_container_list'}>
                {
                    panier.length > 0 ? (panier.map((elem, index) => {
                        return <li className={'panier_container_item'} key={index} onClick={() => handleRemove(elem)}> {elem.name} x {elem.quantite} </li>
                    })) : (
                        <span> Aucun article dans le panier </span>
                    )
                }
            </ul>
            <div className={'total_item'}>
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

            <div className='total_price'>
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