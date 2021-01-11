import React, {useState} from 'react';

const CounterExample = () => {
    const [value, setValue] = useState(0);
    const resetCounter = () => {
        setValue(0);
    };
    const complexIncrease = () => {
        setTimeout(() =>{
            setValue((prevState) => {
                return prevState + 1;
            })
        },2000);
    };
    return(
        <>
            <section style={{margin: '4rem 0'}}>
                <h3> regular counter </h3>
                <h3> {value} </h3>
                <button className = 'btn' onClick = {() => setValue(value - 1)}> Decrease </button>
                <button className = 'btn' onClick = {resetCounter}> Reset </button>
                <button className = 'btn' onClick = {() => setValue(value + 1)}> Increase </button>
                <h3> complex counter </h3>
                <h3> {value} </h3>
                <button className = 'btn' onClick = {() => complexIncrease()}> Increase </button>
            </section>
        </>
    );
}
export default CounterExample;