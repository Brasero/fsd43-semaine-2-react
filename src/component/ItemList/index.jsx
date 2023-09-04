import React from 'react'

import Panier from '../Panier'


const elements = [
    {
        name: 'iPhone 14',
        prix: 899.99
    },
    {
        name: 'airPod',
        prix: 99.99
    }
]

const ItemList = ({onAdd}) => {
    return (
        <div className='container'>
            <div className='itemList'>
               <ul>
                {
                    elements.map((element, index) => {
                        return <li key={index} onClick={() => onAdd(element)}>{element.name} - {element.prix} €</li>
                    })
                }
               </ul>
            </div>
        </div>
    )
}

export default ItemList