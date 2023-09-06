export const SET_MSG = 'message/set';

export const setMsgAction = (msg) => {
    return {
        type: SET_MSG,
        payload: msg
    }
}

export const ADD_LOG = 'message/add'

export const addLogAction = ({action, name, reducerName, date}) => {
    const log = `action : ${action}, efféctuer le : ${date}, nom : ${name}, store : ${reducerName}`

    return {
        type: ADD_LOG,
        payload: log
    }
}

export const RESET_LOG = 'message/resetLog';

export const resetLogAction = () => {
    return {
        type: RESET_LOG
    }
}