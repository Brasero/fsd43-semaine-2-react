import ItemList from "../../component/ItemList/index.jsx";
import './acceuil.scss'

import products from "../../Data/product.js";
import CategoryFilter from "../../component/CategoryFilter/index.jsx";
import {useState} from "react";

const Acceuil = ({addToCart}) => {

    const [categoryFilter, setCategoryFilter] = useState(null)

    const handleFilterChange = (filter) => {
        setCategoryFilter(filter)
    }

    const filteredProducts = () => {
        if (categoryFilter === null) {
            return products;
        }
        return products.reduce((acc, current)=>{
            if (current.category === categoryFilter) {
                acc.push(current)
            }
            return acc;
        }, [])
    }

    return (
        <div className={'container'}>
            <CategoryFilter elements={products} filter={categoryFilter} handleChange={handleFilterChange} />
            <ItemList onAdd={addToCart} elements={filteredProducts()}/>
        </div>
    )
}

export default Acceuil