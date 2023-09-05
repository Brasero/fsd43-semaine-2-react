import React from 'react'
import './itemList.scss'

import {NavLink} from "react-router-dom";



const ItemList = ({onAdd, elements}) => {
    return (
        <div className='container'>
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
                                            onClick={() => onAdd(element)}
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
        </div>
    )
}

export default ItemList