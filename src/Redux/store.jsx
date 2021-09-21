import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { getAllProducts, productDeatilsReducer } from './reducers/productReducers';

const combineReducer = combineReducers({
    allProducts: getAllProducts,
    productDetails: productDeatilsReducer
})

const middleWares = [thunkMiddleWare];
const store = createStore(combineReducer, applyMiddleware(...middleWares))


export default store;
