const DefaultState = {};

export const getAllProducts = (state = DefaultState, action) => {
    switch(action.type) {
        case 'ALL_PRODUCTS':
            const updatedState = Object.assign({}, {...state, products: action.payload});
            return updatedState;

        default:
            return state;
    }
}

export const productDeatilsReducer = (state = {}, action) => {
    switch(action.type) {
        case 'PRODUCT_DETAILS':
            const updatedState = Object.assign({}, {...state, ...action.payload});
            return updatedState;
            // return {...state, ...action.payload }

        default:
            return state;
    }
}