export const SET_PRODUCT = 'product/set';

export const setProductAction = (products) => {
    return {
        type: SET_PRODUCT,
        payload: products
    }
}