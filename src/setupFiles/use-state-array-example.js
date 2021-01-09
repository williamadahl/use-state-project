import React, {useState} from 'react';
import {data} from '../data/data';

const UseStateArray = () => {
    const [people, setPeople] = useState(data);
    const removeThisNiggah = (id) =>{
        let savedPeople = people.filter((person) => person.id !== id);
        setPeople(savedPeople);
    }
    return (
        <>
            {people.map((person) =>{
                const {id, name} = person;
                return (
                    <div key={id} className = 'item'>
                        <h4>{name}</h4>
                        <button onClick={() => removeThisNiggah(id)}>
                            remove
                        </button>
                    </div>
                );
             })}
             <button className = 'btn' onClick={()=> setPeople([])}>
                 clear items
             </button>
        </>
    );
}
export default UseStateArray;