export const setProducts = (products) => {
    return {
        type: 'ALL_PRODUCTS',
        payload:products
    }
}
export const setProductDetails = (product) => {
    return {
        type: 'PRODUCT_DETAILS',
        payload:product
    }
}