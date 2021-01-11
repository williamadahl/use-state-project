import React, {useState} from 'react';


const UseStateObject = () =>{
    /*
    * Can also set up handler functions for setting values:
    * const [name, setName] = useState('cindy')
    * ....
    * setName('tranny');
    * <h4> {name} </h4>
    * */
    const [person, setPerson] = useState({name: 'cindy', age: 15, message: 'i love horsses'});
    const changeName = () =>{
        // the spread operator '...' maintains the object and only sets desired values
        setPerson({...person, name: 'tranny'});
    };
    return(
        <>
            <h4> {person.name} </h4>
            <h4> {person.age} </h4>
            <h4> {person.message} </h4>
            <button className = 'btn' onClick={changeName}>
                change name
            </button>
         </>
    );
}
export default UseStateObject;