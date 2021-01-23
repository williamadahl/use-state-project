import React, {useState, useCallback, useMemo} from 'react';
import {useFetch} from '../customHooks/useFetch';
const url = 'https://course-api.com/javascript-store-products';

/* Every time a prop or state changes, components re-render! */

const UseMemo = () => {
    const {products} = useFetch(url);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState(0);

    const addToCart = useCallback(() => {
        setCart(cart+1);
    },[cart]);

    return (
        <>
            <h2> Count : {count}</h2>
            <h2 style={{marginTop:'3rem'}}>Cart : {cart}</h2>
            <button className='btn' onClick={() => setCount(count+1)}> Click me </button>
            <BigList products={products} addToCart={addToCart}/>
        </>
    );
};

const BigList = React.memo(({products, addToCart}) =>{
    return (
        <section className='products'>
            {products.map((product) => {
                return <SingleProduct key={product.id} {...product} addToCart={addToCart}></SingleProduct>;
            })}
        </section>
    );
});

const SingleProduct = ({fields, addToCart}) =>{
    let {name, price} = fields;
    price = price/100;
    const image = fields.image[0].url;
    return (
        <article className='product'>
            <img src={image} alt={name}/>
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </article>
    );
};

export default UseMemo;