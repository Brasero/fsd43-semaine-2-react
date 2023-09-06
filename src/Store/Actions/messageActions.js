export const SET_MSG = 'message/set';

export const setMsgAction = (msg) => {
    return {
        type: SET_MSG,
        payload: msg
    }
}