import React from 'react';
import "./Product.css"
const Product = (props) => {
    const { name, img, price,seller,ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: {price} Tk</p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={handleAddToCart} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;