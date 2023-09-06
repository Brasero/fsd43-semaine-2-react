import {ADD_USER} from "../Actions/userActions.js";
import {ADD_HORSE} from "../Actions/horseActions.js";
import moment from 'moment'
import {addLogAction} from "../Actions/messageActions.js";

const getTime = () => {
    return moment().format('DD MM YYYY à hh:mm:ss')
}

const logMiddleware = (store) => (next) => (action) => {

    const nextAction = next(action)
    const targetedActions = [ADD_USER, ADD_HORSE]

    if(targetedActions.includes(action.type)) {
        const name = action.payload.name
        const reducerName = action.type === ADD_USER ? 'user' : 'horse'
        const date = getTime()
        const actionType = action.type
        store.dispatch(addLogAction({action:actionType, date, name, reducerName}))
    }
    return nextAction
}

export default logMiddleware