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
                            <div className={'item'}>
                                <li key={index} onClick={() => onAdd(element)}>{element.name} - {element.price} €</li>
                                <NavLink to={`/detail/${element.name}`} state={element}> > </NavLink>
                            </div>
                        )
                    })
                }
               </ul>
            </div>
        </div>
    )
}

export default ItemList