export const ADD_HORSE = 'horse/add';

export const addHorseAction = (horse) => {
    return {
        type: ADD_HORSE,
        payload: {
            ...horse
        }
    }
}