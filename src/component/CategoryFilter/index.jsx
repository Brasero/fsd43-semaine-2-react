import {useSelector} from "react-redux";
import {selectProducts} from "../../Store/Selectors/productSelectors.js";

const CategoryFilter = ({ filter, handleChange}) => {

    const elements = useSelector(selectProducts)

    const categories = elements.reduce((acc, current) => {
        if (!acc.includes(current.category)) {
            acc.push(current.category)
        }
        return acc;
    }, [])

    const handleClick = (e) => {
        const {value} = e.target
        if (value === 'null') {
            handleChange(null)
        } else {
            handleChange(value)
        }
    }

    return (
        <select value={filter} onChange={handleClick}>
            <option value={'null'}>----</option>
            {
                categories.length > 0 && categories.map((elem, index) => {
                    return <option key={`${elem}-${index}`} value={elem}>
                        {elem}
                    </option>
                })
            }
        </select>
    )
}

export default CategoryFilter