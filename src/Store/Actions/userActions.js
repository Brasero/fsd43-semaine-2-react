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