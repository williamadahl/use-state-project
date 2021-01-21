import React from 'react';
import Product from './Product';
import {useFetch} from '../customHooks/useFetch';

const url = 'https://course-api.com/react-prop-types-example';

const Index = () =>{
    const {products} = useFetch(url);
    return (
        <>
            <h2> Products below </h2>
                <section className='products'>
                    {products.map((product) => {
                        return <Product key={product.id}{...product} />;
                    })}
                </section>
        </>
    );
};
export default Index;

