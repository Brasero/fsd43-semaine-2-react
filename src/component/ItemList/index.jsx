import React, {useEffect, useState} from 'react'
import './itemList.scss'

import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addAction } from "../../Store/Actions/panierActions.js";
import {selectProducts} from "../../Store/Selectors/productSelectors.js";
import {setProductAction} from "../../Store/Actions/productActions.js";
import products from "../../Data/product.js";



const ItemList = () => {

    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const elements = useSelector(selectProducts)
    console.log(elements)
    useEffect(()=> {
        setIsLoading(true)
        setTimeout(
            () => {
                dispatch(setProductAction(products()))
                setIsLoading(false)
            },
            2000
        )
    }, [])
    const addToCart = (elem) => {
        dispatch(addAction(elem))
    }

    return (
        <div className='container'>
            {
                isLoading ? 'Chargement...' : (
                    <div className='itemList'>
                        <ul className={'list'}>
                            {
                                elements.map((element, index) => {
                                    return (
                                        <li key={index} className={'item'}>
                                            <div className={'img_wrapper'}>
                                                <img src={'https://placehold.co/200?text=Image\\nHere'} />
                                            </div>
                                            <div className={'item_wrapper'}>
                                                <div className={'item_title'}>{element.name}</div>
                                                <div className={'item_price'}>{element.price} €</div>
                                                <div className={'item_buttons'}>
                                                    <NavLink
                                                        className={'item_buttons_button'}
                                                        to={`/detail/${element.name}`}
                                                        state={element}
                                                    >
                                                        Voir plus >
                                                    </NavLink>
                                                    <button
                                                        className={'item_buttons_button'}
                                                        role={'button'}
                                                        onClick={() => addToCart(element)}
                                                    >
                                                        Ajouter au panier +
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default ItemList