import React, {useState, useEffect} from 'react';
/*
* SHORT CIRCUITING
* --------------------------
* Short circuiting is very useful for conditional rendering.
* 'false' + || (whatever) -> whatever
* 'true' + || (whatever) -> 'true'
* 'false' + && (whatever) -> 'false'
* 'true' + && (whatever) -> whatever
*
* TERNARY OPERATOR
* --------------------------
* 'evaluation' ? ( 'true') : ('false')
* */


const ShortCircuit = () =>{
    const [text, setText] = useState('');
    const [isError, setIsError] = useState(false);
    // const firstValue = text || ' let me whip you.';
    // const secondValue = text && ' let me sell you.';

    return (
      <>
          {/*<h1>First: {firstValue}</h1> */}
          {/* <h1>Second: {secondValue}</h1>*/}
          {/* {text || <h3>or operator</h3>}*/}
          {/* {text && <h3>and operator</h3>}*/}
          {/* {!text && <h3> not and operator</h3>}*/}
          <h1>Toggle example</h1>
          <button className = 'btn' onClick={() => setIsError(!isError)}> Toggle error </button>
          {isError && <h3>Error...</h3>}
          {isError ? (
              <p> there is an error...</p>
          ): (
              <div>
                  <h3> there is no error </h3>
              </div>
          )}
      </>
    );

}
export default ShortCircuit;