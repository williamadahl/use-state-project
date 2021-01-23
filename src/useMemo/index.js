import React, {useState, useCallback, useMemo} from 'react';
import {useFetch} from '../customHooks/useFetch';

const url = 'https://course-api.com/javascript-store-products';
const UseMemo = () => {
    const {products} = useFetch(url);
    const [count, setCount] = useState(0);

    return (
        <>
            <h2> Count : {count}</h2>
            <button className='btn' onClick={() => setCount(count+1)}> Click me </button>
            <BigList products={products}/>
        </>
    );
};

const BigList = React.memo(({products}) =>{
    return (
        <section className='products'>
            {products.map((product) => {
                return <SingleProduct key={product.id} {...product}></SingleProduct>;
            })}
        </section>
    );
});

const SingleProduct = ({fields}) =>{
    let {name, price} = fields;
    price = price/100;
    const image = fields.image[0].url;
    return (
        <article className='product'>
            <img src={image} alt={name}/>
            <h4>{name}</h4>
            <p>${price}</p>
        </article>
    );
};

export default UseMemo;