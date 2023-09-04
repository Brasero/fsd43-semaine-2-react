import React from 'react'

const Multiple = ({value}) => {
    const limit = 100

    const multiple = (value) => {
        let [numbers, count] = [[], 1]
        while (true) {
            const mult = count*value;

            if (mult > limit) break;

            numbers.push(mult)
            count++
        }

        return numbers;
    }

    const values = multiple(value)

    return (
        <ul>
            {
               values.length > 0 &&
                    values.map((num) => {
                        return <li>{num}</li>
                    })
            }
        </ul>
    )

}

export default Multiple