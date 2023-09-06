import {useState} from "react";
import {useDispatch} from "react-redux";
import {addUserAction} from "../../Store/Actions/userActions.js";
import config from "./formConfig.js";
import validator from "../../utils/tools/validator.jsx";

const UserForm = () => {

    const initialUser = {
        name: '',
        surname: ''
    }

    const initialError = {
        ...initialUser,
        submitError: ""
    }

    const [user, setUser] = useState(initialUser)
    const [error, setError] = useState(initialError)

    const dispatch = useDispatch()

    const {validate, validateAll} = validator(config);

    const handleChange = (e) => {
        const {value, name} = e.target
        const error = validate(name, value)

        if (error) {
            console.log(error)
            setError({
                ...error,
                [name]: error
            });
        } else {
            setError(initialError)
        }
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const validError = validateAll(user)
        console.log(validError)
        if (validError) {
            setError({
                ...error,
                submitError: validError
            })
            return;
        }
        dispatch(addUserAction(user))
        setUser(initialUser)
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                Object.keys(config).map((key, index) => {
                     return (
                         <div className={"inputGroup"}>
                             <label>
                                 {config[key].label} :
                                 <input type={config[key].type} name={config[key].name} value={user[key]} onChange={handleChange} />
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
            <div className={'inputButton'}>
                <input type={'submit'} value={'Enregistrer'}/>
            </div>
        </form>
    )
}

export default UserForm