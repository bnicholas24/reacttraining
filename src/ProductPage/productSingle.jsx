import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const ProductSingle = () => {
    const products = useSelector((state) => {
        console.log('state.allProducts', state.allProducts)
        return state.allProducts.products
    });

    return (
        <div className="products">
            { products?.map((product, key) => {
                return(
                    <div className="product-list" key={key}>
                        <Link to={`/products/${product.id}`}>
                            <img src={product.image} />
                            <p className="product-title">{product.title}</p>
                        </Link>
                    </div>
                )
            })
            }
        </div>
    )
}

export default ProductSingle;