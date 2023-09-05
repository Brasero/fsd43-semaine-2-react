import {NavLink, useLocation, useNavigate} from "react-router-dom";

const DetailProduct = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const returnIcon = '<-'

    return (
        <>
            <header>
                <button role={'button'} onClick={goBack}> {returnIcon} </button>
            </header>
            <h1>{location.state.name}</h1>
            <h2>{location.state.prix}</h2>
        </>
    )
}

export default DetailProduct