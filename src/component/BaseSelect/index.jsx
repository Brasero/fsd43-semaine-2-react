import React, {useState} from 'react'

import Multiple from '../Multiple'

const BaseSelect = () => {

    const [base, setBase] = useState(2)

    const handleChange = (e) => {
        setBase(e.target.value)
    }

    const options = [
        2,
        3,
        4,
        5,
        6,
        7
    ]

    return (
        <>
            <select value={base} onChange={handleChange}>
            {
                options.map((num, index) => {
                    return <option key={index} value={num}>{num}</option>
                })
            }
            </select>
            <Multiple value={base} />
        </>
    )
}

export default BaseSelect;