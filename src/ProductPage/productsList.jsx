import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../services/productServices';
import { setProducts } from '../Redux/action/productActions';
import ProductSingle from './productSingle';

const ProductsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getProducts()
        .then(response => {
            dispatch(setProducts(response))
        })
        // .catch( error => {
        //     dispatch(setProducts({errorMessage:error.message}));
        // })
    },[]);

    return (
        
        <React.Fragment>
            <div className="page-title">Product Page</div>
            <ProductSingle />
        </React.Fragment>
    )
      
}

export default ProductsList;
