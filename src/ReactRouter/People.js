import React, {useState} from 'react';
import {data} from '../data/data'
import {Link} from 'react-router-dom';

const People =() =>{
    const [people, setPeople] = useState(data);
    return (
        <>
            <h3> People page </h3>
            {people.map((person) => {
                return(
                    <div key={person.id} className='item'>
                        <h4>{person.name}</h4>
                        /** This is where the id in the url is set as the id of a person, which we can then again
                        * use as a lookup against the data to display more informaition about the person
                        */
                        <Link to={`/person/${person.id}`}> Learn more </Link>
                    </div>
                );
            })}
        </>
    );
};
export default People;