import {NavLink} from "react-router-dom";
import './navBar.scss'

const NavBar = () => {

    const styleFn = ({isActive}) => {
        return {
            margin: '5px',
            color: isActive && 'white'
        }
    }

    return (
        <nav>
            <NavLink to={'/'} style={styleFn}>Acceuil</NavLink>
        </nav>
    )
}

export default NavBar