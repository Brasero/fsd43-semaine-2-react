import React, {useState} from 'react';

import UserList from '../UserList'

const Form = () => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    const [list, setList] = useState([
        'Pierre',
        'Paul',
        'Jacques'
    ])

    const validate = (value) => {
        if (value === '') {
            return 'Merci de saisir une valeur';
        }

        const pattern = /^[A-Za-z]*$/;

        if (!pattern.test(value)) {
            return "Format invalide";
        }

        return true;
    }


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

        const errored = validate(value)

        if (errored === true) {
            const copy = [...list];
            copy.push(value)
            setList(copy)
        } else {
            setError(errored)
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

           <UserList list={list} />
        </form>
    )

}

export default Form