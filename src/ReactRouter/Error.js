import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => {
    return(
        <>
            <h1> Error page </h1>
            <Link to='/' className='btn'>Go Home</Link>
        </>

    )
};
export default Error;
