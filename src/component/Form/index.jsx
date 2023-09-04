import React, {useState, useReducer} from 'react';

import UserList from '../UserList';


const formReducer = (state, action) => {
    switch(action.type) {

        case 'changeValue':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        case 'RESET':
            return init(initialState)

        default:
            return state;
    }
}

const init = (state) => {
    return {
        ...state,
        inputValue: 'votre nom',
        error: ''
    }
}
const initialState = {
     inputValue: '',
     error: '',
     select: [2,3],
     list: [],
     input2: ''
 }


const Form = () => {


    const [reducerState, dispatch] = useReducer(formReducer, initialState, init)

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

        dispatch({
            type: 'changeValue',
            payload: {
                name,
               value
            }
        })

        if (e.target.value.length > 0) {
            dispatch({
                type: 'changeValue',
                payload: {
                    name: "error",
                    value: ''
                }
            })
        }
    }

    const handleSelectChange = (value) => {

        const copy = [...reducerState.select]

        const index = copy.findIndex((num) => num === value)

        if (index === -1) {
            copy.push(value)
            dispatch({
                type: 'changeValue',
                payload: {
                    name: 'select',
                    value: copy
                }
            })
        } else {
            const newSelect = copy.filter((num) => num !== value)
            dispatch({
                type: 'changeValue',
                payload: {
                    name: 'select',
                    value: newSelect
                }
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const errored = validate(reducerState.inputValue)

        if (errored === true) {
            const copy = [...reducerState.list];
            copy.push(reducerState.inputValue)
            dispatch({
                type: 'changeValue',
                payload: {
                    name: 'list',
                    value: copy
                }
            })
            dispatch({
                type: 'changeValue',
                payload: {
                    name: 'inputValue',
                    value: ''
                }
            })
        } else {
            dispatch({
                type: 'changeValue',
                payload: {
                    name: 'error',
                    value: errored
                }
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
                    value={reducerState.inputValue}
                    onChange={handleChange}
                />
            </label>
            <label>
                input 2 :
                <input
                    type='text'
                    name="input2"
                    value={reducerState.input2}
                    onChange={handleChange}
                />
            </label>

           <input
            type='submit'
            value='Add'
           />
           <select name='select' value={reducerState.select} multiple={true} onChange={handleChange}>
            <option value={1}> option1 </option>
            <option value={2}> option2 </option>
            <option value={3}> option3 </option>
            <option value={4}> option4 </option>
           </select>

           <div>{reducerState.error && reducerState.error}</div>

           <div onClick={() => dispatch({type: 'RESET'})}>RESET</div>

           <UserList list={reducerState.list} />
        </form>
    )

}

export default Form