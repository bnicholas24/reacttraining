import http from 'axios';

const API_URL = "https://fakestoreapi.com/products";

console.log('API-URL', API_URL)
export const getProducts = async () => {
    console.log('detailsParam', API_URL )
    try {
        const productsURL = await http.get(API_URL + '?limit=20');
        // console.log('products ', productsURL)
        return productsURL.data;
    }
    catch(error) {
        return error;
    }
}
export const getProductDetails = async (id) => {
    console.log('detailsParams', API_URL  )
    try {
        const productsURL = await http.get(API_URL + '/' + id );
        console.log('products ', productsURL)
        return productsURL.data;
    }
    catch(error) {
        return error;
    }
}
