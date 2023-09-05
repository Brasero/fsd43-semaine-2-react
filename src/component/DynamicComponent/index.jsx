import {NavLink, Outlet, useParams} from "react-router-dom";

const DynamicComponent = () => {

    const params = useParams()
    const styleFn = ({isActive}) => ({
        margin: '5px',
        color: isActive && 'white'
    })

    return (
        <>
            <h1>
                {params.monparam}
            </h1>
            <nav>
                <NavLink to={''} style={styleFn}>Retour</NavLink>
                <NavLink to={'page1'} style={styleFn}>page 1</NavLink>
                <NavLink to={'page2'} style={styleFn}>page 2</NavLink>
            </nav>
            <Outlet context={{param: params.monparam}} />
        </>
    )

}

export default DynamicComponent