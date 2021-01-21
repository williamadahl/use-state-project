import React, {useState, useEffect} from 'react';
import {useFetch} from './useFetch';
const url = 'https://course-api.com/javascript-store-products';

const FetchExample = () => {
    const {loading, products} = useFetch(url);
    console.log(products);
    return (
        <>
            <h2>{loading ? 'loading...': 'data nigger'}</h2>
        </>
    );
};

export default FetchExample;