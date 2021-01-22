import React, {useState, useEffect} from 'react';
import {data} from '../data/data';
import {Link, useParams} from 'react-router-dom';

const Person = () => {
    const [name, setName] = useState('default name');
    /* This 'can' be called whatever, but if you want to use ID its best to call it id*/
    const {id} = useParams();

    useEffect(() => {
        const newPerson = data.find((person) => person.id === parseInt(id));
        setName(newPerson.name);
    },[]);

    return (
      <>
          <h1>{name}</h1>
          <Link to='/people' className='btn'>Back to People </Link>
      </>
    );
};
export default Person;