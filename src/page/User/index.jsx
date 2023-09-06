import UserForm from "../../component/UserForm/index.jsx";
import UserList from "../../component/UserList/index.jsx";
import {useSelector} from "react-redux";
import {numberOfUser, selectUserByName} from "../../Store/Selectors/userSelectors.js";

const User = () => {

    const nbUser = useSelector(numberOfUser)
    const user = useSelector(selectUserByName('test'))
    return (
        <>
            <UserForm />
            <UserList />
            <div>
                nombre d'utilisateur : {nbUser}
            </div>
            <div>
                utilisateur selectionné : {user.name}
            </div>
        </>
    )
}

export default User;
