import React, {useState} from 'react';


/*
* the React fragment allows me to drop a list of children in the return.
* multiple divs etc. Another syntax for the fragment is empty tags: <></>.
* */
export const ErrorExample = () => {
    // let title = 'hello from stables'
    // const value = useState(1)[0];
    // const handler = useState(1)[1];
    // console.log(value, handler)

    const clickHandler = () => {
        title = 'i love horses';
        console.log(title);
    }
    return (
        <React.Fragment>
            <button type='button' className ='btn' onClick={clickHandler}>
                change title
            </button>
            <h3>{title}</h3>
        </React.Fragment>
    )
}
export default ErrorExample