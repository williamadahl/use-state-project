import React, {useState, useEffect} from 'react';
/*
* Short circuiting is very useful for conditional rendering.
* 'false' + || (whatever) -> whatever
* 'true' + || (whatever) -> 'true'
* 'false' + && (whatever) -> 'false'
* 'true' + && (whatever) -> whatever
* */


const ShortCircuit = () =>{
    const [text, setText] = useState('..');
    const firstValue = text || ' let me whip you.';
    const secondValue = text && ' let me sell you.';

    return (
      <>
          <h1>First: {firstValue}</h1>
          <h1>Second: {secondValue}</h1>
          {text || <h3>or operator</h3>}
          {text && <h3>and operator</h3>}
          {!text && <h3> not and operator</h3>}
      </>
    );

}
export default ShortCircuit;