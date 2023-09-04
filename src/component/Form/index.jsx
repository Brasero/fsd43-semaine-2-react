import React, {useState} from 'react';

const Form = ({handleAdd}) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')


    const handleChange = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
        if (e.target.value.length > 0) {
            setError('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value)

        if (value !== '') {
            handleAdd(value)
        } else {
            setError('Merci de saisir une valeur')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username :
                <input
                    type='text'
                    value={value}
                    onChange={handleChange}
                />
            </label>
           <input
            type='submit'
            value='Add'
           />
           <div>{error && error}</div>
        </form>
    )

}

export default Form