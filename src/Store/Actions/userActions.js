export const ADD_USER = "user/add"

export const addUserAction = (user) => {

    return {
        type: ADD_USER,
        payload: {
            ...user
        }
    }
}

export const RESET_USER = 'user/reset';

export const resetUserAction = () => {
    return {
        type: RESET_USER
    }
}

export const SET_COUNT = 'user/setCount';

export const setCountAction = (num) => {
    return {
        type: SET_COUNT,
        payload: num
    }
}

//Action asynchrone
export const startCounter = () => {
    return dispatch => {
        setInterval(() => {
            dispatch(setCountAction(1))
        }, 1000)
    }
}