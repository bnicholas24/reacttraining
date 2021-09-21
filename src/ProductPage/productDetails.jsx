import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../services/productServices';
import { setProductDetails } from '../Redux/action/productActions';

const ProductDetails = () => {
    const singleProduct = useSelector((state) => {
        // console.log('productD', state.productDetails)
        return state.productDetails
    });
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        getProductDetails(id)
        .then(response => {
            dispatch(setProductDetails(response))
        })
        // .catch( error => {
        //     dispatch(setProductDetails({errorMessage:error.message}));
        // })
    },[]);
    const { image, title, description, category, price, rating } = singleProduct;
    return(
        
        <div>
            <p className="page-title">Product Details</p>
            
            <div className="product-details">
                <div className="product-img">
                    <img src={image} />
                </div>
                <div className="product-description">
                    <p className="page-title">{title}</p>
                    <p>{description}</p>
                    <p><strong>Category: </strong><span>{category}</span></p>
                    <p><strong>Price: </strong><span>{price}</span></p>
                    <p><strong>Rating: </strong><span>{rating?.count} 
                    <span style={{fontStyle:'italic'}}> viewers </span> 
                    <span>{rating?.rate}</span> <span style={{fontStyle:'italic'}}>rating</span>
                    </span></p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails