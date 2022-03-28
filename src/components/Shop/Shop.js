import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

 
import "./Shop.css"
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart)
    

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
                        <div className='cart-items' key={item.id}>
                            <img className='watch-img' src={item.img} alt=""/>
                            <p className='pt-3 carts-product-name'>{item.name}</p>
                            
                        </div>
                        
                    ))
                }
                <div className='choose-and-select-btn'>
                    <button className='randomly-select-btn'>CHOOSE 1 FOR ME</button>
                    <button className="select-again-btn">CHOOSE AGAIN</button>
               </div>
            </div>
        </div>
    );
};

export default Shop;