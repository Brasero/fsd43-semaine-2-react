import React, {useReducer} from 'react'
import './panier.scss'
import {usePanier} from "../../utils/hook/usePanier.jsx";

const Panier = () => {
    const {panier, removeFromCart} = usePanier()


    return (
        <div className={'panier_container'}>
            <ul className={'panier_container_list'}>
                {
                    panier.length > 0 ? (panier.map((elem, index) => {
                        return <li className={'panier_container_item'} key={index} onClick={() => removeFromCart(elem)}> {elem.name} x {elem.quantite} </li>
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
                            return acc + current.price * current.quantite
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