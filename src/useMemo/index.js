import React, {useState, useCallback, useMemo} from 'react';
import {useFetch} from '../customHooks/useFetch';
const url = 'https://course-api.com/javascript-store-products';

/* Every time a prop or state changes, components re-render! */
/* React.memo will look at the props and check for change, while useMemo checks the value*/

const calculateMostExpensive = (data) => {
    return (
        data.reduce((total, item) => {
            const price = item.fields.price;
            if(price >= total){
                total = price;
            }
            return total;
        },0) /100
    );
};

const UseMemo = () => {
    const {products} = useFetch(url);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState(0);

    const addToCart = useCallback(() => {
        setCart(cart+1);
    },[cart]);

    const mostExpensiveItem = useMemo(() => calculateMostExpensive(products), [products]);

    return (
        <>
            <h2> Count : {count}</h2>
            <button className='btn' onClick={() => setCount(count+1)}> Click me </button>
            <h2 style={{marginTop:'3rem'}}>Cart : {cart}</h2>
            <h2> Most expensive product : ${mostExpensiveItem}</h2>
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