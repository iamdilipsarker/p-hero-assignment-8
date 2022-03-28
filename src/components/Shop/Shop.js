import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';

import "./Shop.css"
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h5>Order Summary</h5>
                <h6>Selected Items: {cart.length}</h6>
                {
                    cart.map(item => (
                        <div key={item.id}>
                            <p>{item.name}</p>

                        </div>
                        
                    ))
                }
                <div className='choose-and-select-btn'>
                     <button class="randomly-select-btn">CHOOSE 1 FOR ME</button>
                    <button class="select-again-btn">CHOOSE AGAIN</button>
               </div>
            </div>
        </div>
    );
};

export default Shop;