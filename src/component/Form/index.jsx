import React, {useState, useEffect} from 'react';

import UserList from '../UserList'

const Form = () => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    //Valeur et setter du textarea
    const [text, setText] = useState('test')


    //Valeur par default du select
    const [select, setSelect] = useState([3, 2])


    const [list, setList] = useState([
        'Pierre',
        'Paul',
        'Jacques'
    ])

    useEffect(() => {
        console.log(select)
    }, [select])

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

    const handleSelectChange = (e) => {
        const {value} = e.target
        const copy = [...select]

        const index = copy.findIndex((num) => num === value)
        console.log(index)

        if (index === -1) {
            copy.push(value)
            setSelect(copy)
        } else {
            setSelect(copy.filter((num) => num !== value))
        }
    }


    // Fonction de modification du textarea
    const handleTextChange = (e) => {
        setText(e.target.value)
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
           <select value={select} multiple={true} onChange={handleSelectChange}>
            <option value={1}> option1 </option>
            <option value={2}> option2 </option>
            <option value={3}> option3 </option>
            <option value={4}> option4 </option>
           </select>

           <div>{error && error}</div>

           <UserList list={list} />
        </form>
    )

}

export default Form