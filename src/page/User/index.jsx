import UserForm from "../../component/UserForm/index.jsx";
import UserList from "../../component/UserList/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectCounter} from "../../Store/Selectors/userSelectors.js";
import HorseForm from "../../component/HorseForm/index.jsx";
import HorseList from "../../component/HorseList/index.jsx";
import {setCountAction, startCounter} from "../../Store/Actions/userActions.js";
import {selectMsg} from "../../Store/Selectors/messageSelectors.js";

const User = () => {

    const counter = useSelector(selectCounter)
    const dispatch = useDispatch()
    const msg = useSelector(selectMsg)

    const incrementOnce = (num) => dispatch(setCountAction(num))
    const incrementInterval = () => dispatch(startCounter())

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
            <div>
                <div>
                    compteur : {counter}
                </div>
                <div>
                    <button role={'button'} onClick={() => incrementOnce(1)}>+1</button>
                    <button role={'button'} onClick={() => incrementInterval()}>Start</button>
                </div>
            </div>
            <div>
                {
                    msg
                }
            </div>
        </>
    )
}

export default User;
