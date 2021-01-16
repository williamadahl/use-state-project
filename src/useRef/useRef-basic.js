import React, {useState, useRef} from 'react';
/**
 * useRef: perserves value
 * DOES NOT trigger re-render (useState does)
 * target DOM nodes / elements
 * */


const UseRef = () => {
    const refContainer = useRef(null);
    const divContainer = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(refContainer.current.value);
        console.log(divContainer.current);
    };
    const useEffect = () => {
        console.log(refContainer.current);
        refContainer.current.focus();
    }; // look we don't need to add a dependency list, as useRef does not re-render the page
   return (
     <>
         <form className = 'form' onSubmit={handleSubmit}>
             <div>
                 <input type = 'text' ref={refContainer}/>
                 <button type= 'submit'>Submit </button>
             </div>
         </form>
         <div ref={divContainer}>hello slut</div>
   </>
   );
}
export default UseRef;