import UserForm from "../../component/UserForm/index.jsx";
import UserList from "../../component/UserList/index.jsx";
import {useSelector} from "react-redux";
import {numberOfUser, selectUserByName} from "../../Store/Selectors/userSelectors.js";
import HorseForm from "../../component/HorseForm/index.jsx";
import HorseList from "../../component/HorseList/index.jsx";

const User = () => {

    return (
        <>
            <div>
                <UserForm />
                <UserList />
            </div>
            <div>
                <HorseForm />
                <HorseList />
            </div>
        </>
    )
}

export default User;
