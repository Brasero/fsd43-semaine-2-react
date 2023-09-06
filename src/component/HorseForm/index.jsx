import config from "./formConfig.js";
import validator from "../../utils/tools/validator.jsx";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addHorseAction} from "../../Store/Actions/horseActions.js";

const HorseForm = () => {

    const dispatch = useDispatch()
    const initialHorse = {
        name: '',
        size: ''
    }

    const initialError = {
        ...initialHorse,
        submitError: ''
    }

    const [horse, setHorse] = useState(initialHorse)
    const [error, setError] = useState(initialError)
    const {validate, validateAll} = validator(config)

    const handleChange = (e) => {
        const {name, value} = e.target
        const errored = validate(name, value)
        setHorse({
            ...horse,
            [name]: value
        })
        if (errored) {
            setError({
                ...error,
                [name]: errored
            })
        } else {
            setError({
                ...error,
                [name]: ''
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errored = validateAll(horse)
        if (errored) {
            setError({
                ...error,
                submitError: errored
            })
            return
        }
        dispatch(addHorseAction(horse))
        setHorse(initialHorse)
    }



    return (
        <form onSubmit={handleSubmit}>
            {
                Object.keys(config).map((key,index)=> {
                    return (
                        <div className={"inputGroup"} key={`${key}-${index}`}>
                            <label>
                                {config[key].label} :
                                <input type={config[key].type} name={config[key].name} value={horse[key]} onChange={handleChange} />
                                {
                                    error[key] && <span style={{color: 'red'}}>{error[key]}</span>
                                }
                            </label>
                        </div>
                    )
                })
            }
            {
                error.submitError && <span style={{color: 'red'}}>{error.submitError}</span>
            }
            <input type={'submit'} value={'Enregistrer'} />
        </form>
    )
}

export default HorseForm