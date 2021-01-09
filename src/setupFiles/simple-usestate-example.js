import React, {useState} from 'react';


/*
* the React fragment allows me to drop a list of children in the return.
* multiple divs etc. Another syntax for the fragment is empty tags: <></>.
* */
export const UseStateExample = () => {
    // let title = 'hello from stables'
    // const value = useState(1)[0];
    // const handler = useState(1)[1];
    // console.log(value, handler)

    const [text,setText] = useState('hello from stables');
    const clickHandler = () => {
        if(text === 'hello from stables'){
            setText('i love horses');
        }
        else{
            setText('hello from stables');
        }
    };
    return (
        <React.Fragment>
            <h3>{text}</h3>
            <button className = 'btn' onClick={clickHandler}>
                <h3>click me please</h3>
            </button>
        </React.Fragment>
    );
}
export default UseStateExample