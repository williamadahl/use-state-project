import React, {useState, useEffect} from 'react';
// UseEffect reruns after every re-render by default
// cleanup function
// second parameter

const UseEffectBasic = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if(value > 3){
            console.log('call useEffect()');
            document.title = `Clicked me ${value}`;
        }
    });
    return(
        <>
            <h3>{value}</h3>
            <button className = 'btn' onClick={() => setValue(value+1)}>
                click me harder!!
            </button>
        </>

    );
}
export default UseEffectBasic;