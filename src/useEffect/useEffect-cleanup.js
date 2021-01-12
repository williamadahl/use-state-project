import React, {useState, useEffect} from 'react';


const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () => {
        setSize(window.innerWidth);
    };
    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('resize', checkSize);
        return () => {
            console.log('cleanup')
            window.removeEventListener('resize', checkSize);
        };
    });
    return (
        <>
        <h3>window</h3>
            <h4>{size} PX</h4>
        </>
    );
}

export default UseEffectCleanup;