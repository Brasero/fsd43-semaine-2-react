import {NavLink} from "react-router-dom";

const NavBar = () => {

    const styleFn = ({isActive}) => {
        return {
            margin: '5px',
            color: isActive && 'white'
        }
    }

    return (
        <nav>
            <NavLink to={'/'} style={styleFn} state={{from: 'coucou'}}>Panier</NavLink>
            <NavLink to={'/form'} style={styleFn}>Formulaire</NavLink>
        </nav>
    )
}

export default NavBar