import React, { useState} from 'react'
import './panier.scss'
import {useSelector, useDispatch} from "react-redux";
import {selectPanier} from "../../Store/Selectors/panierSelectors.js";
import {removeAction} from "../../Store/Actions/panierActions.js";

const Panier = () => {

    const dispatch = useDispatch()
    const panier = useSelector(selectPanier)
    const [isOpen, setIsOpen] = useState(false)

    const removeFromCart = (elem) => {
        dispatch(removeAction(elem))
    }
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={'panier_container'} >
            {
                isOpen ? (
                        <>
                            <button className={'toggle_button'} onClick={toggleIsOpen}>Fermer</button>
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
                        </>
                ) : (
                    <>
                        <button className={'toggle_button'} onClick={toggleIsOpen}>Ouvrir</button>
                    </>
    )
            }
        </div>
    )
}

export default Panier