import {useSelector, useDispatch} from "react-redux";
import {selectUsers} from "../../Store/Selectors/userSelectors.js";
import {resetUserAction} from "../../Store/Actions/userActions.js";

const UserList = () => {

    const users = useSelector(selectUsers)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(resetUserAction())
    }

    return (
        <div className={'userList'}>
            {
                users.length > 0 ? (
                    <ul>
                        {
                            users.map((user, index) => {
                                return (
                                    <li key={`${user.name}-${index}`}>{user.name}</li>
                                )
                            })
                        }
                        <button onClick={handleClick}>Vider la liste</button>
                    </ul>
                ) : (
                    <span>Aucun utilisateur.</span>
                )
            }
        </div>
    )
}

export default UserList;