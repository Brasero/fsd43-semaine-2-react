import React, {useState, useEffect} from 'react';

import UserList from '../UserList'

const Form = () => {

    const [state, setState] = useState({
        inputValue: '',
        error: '',
        select: [2,3],
        list: [],
        input2: ''
    })

    useEffect(() => {
        console.log(state)
    }, [state])

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
        const {value, name} = e.target;

        if (name === 'select') {
            handleSelectChange(parseInt(value))
            console.log('select')
            return;
        }

        setState({
            ...state,
            [name]: value
        })

        if (e.target.value.length > 0) {
            setState((prev) => {
                return {
                    ...prev,
                    error: ''
               }
            })
        }
    }

    const handleSelectChange = (value) => {

        const copy = [...state.select]

        const index = copy.findIndex((num) => num === value)

        if (index === -1) {
            copy.push(value)
            setState({
                ...state,
                select: copy
            })
        } else {
            const newSelect = copy.filter((num) => num !== value)
            setState({
                ...state,
                select: newSelect
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const errored = validate(state.inputValue)

        if (errored === true) {
            const copy = [...state.list];
            copy.push(state.inputValue)
            setState({
                ...state,
                list: copy,
                inputValue: ''
            })
        } else {
            setState({
                ...state,
                error: errored
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username :
                <input
                    type='text'
                    name="inputValue"
                    value={state.inputValue}
                    onChange={handleChange}
                />
            </label>
            <label>
                input 2 :
                <input
                    type='text'
                    name="input2"
                    value={state.input2}
                    onChange={handleChange}
                />
            </label>

           <input
            type='submit'
            value='Add'
           />
           <select name='select' value={state.select} multiple={true} onChange={handleChange}>
            <option value={1}> option1 </option>
            <option value={2}> option2 </option>
            <option value={3}> option3 </option>
            <option value={4}> option4 </option>
           </select>

           <div>{state.error && state.error}</div>

           <UserList list={state.list} />
        </form>
    )

}

export default Form