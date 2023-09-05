export const PANIER_ADD = 'panier/addItem'
export const PANIER_REMOVE = 'panier/removeItem'

export const addAction = (elem) => {
    return {
        type: PANIER_ADD,
        payload: elem
    }
}

export const removeAction = (elem) => {
    return {
        type: PANIER_REMOVE,
        payload: elem
    }
}