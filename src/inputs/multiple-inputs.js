import React, {useState, useEffect} from 'react';
/*
*  This is a refactoring of controlled-inputs. A better way to deal with multiple inputs to form
* */
const MultipleInputs = () => {
    const [people, setPeople] = useState([]);
    const [person, setPerson] = useState({firstName:'', email: '', age: ''});
    /**
     * Amazing dynamic object property update! this way the objects values are kept intact while we update
     * with name and value for some other fields.
     * */
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person, [name]:value})
    };
    /**
     * Again the same principle. If all fields are set we create a new person and keep the values and set
     * a unique ID for maping. After that we can use setPeople and bring in both the old values '...people' while
     * adding a new person. Dynamic ojbects are great!!!
     * */
    const handleSubmit = (e) => {
        e.preventDefault();
        if(person.firstName && person.email && person.age){
            const newPerson = {...person, id: new Date().getTime().toString()};
            setPeople([...people ,newPerson]);
            setPerson({firstName:'', email: '', age: ''});
        }
    };

    return (
        <>
            <article>
                <form className = 'form'>
                    <div className = 'form-control'>
                        <label htmlFor='firstName'>Name: </label>
                        <input
                            type='text'
                            id='firstName'
                            name='firstName'
                            value={person.firstName}
                            onChange ={handleChange}
                        />
                    </div>
                    <div className = 'form-control'>
                        <label htmlFor='email'>Email: </label>
                        <input
                            type='text'
                            id='email'
                            name='email'
                            value = {person.email}
                            onChange = {handleChange}
                        />
                    </div>
                    <div className = 'form-control'>
                        <label htmlFor='age'>Age: </label>
                        <input
                            type='text'
                            id='email'
                            name='age'
                            value = {person.age}
                            onChange = {handleChange}
                        />
                    </div>
                    <button type='submit' onClick={handleSubmit}> Add person </button>
                </form>
                {people.map((person, index) => {
                    const {id, firstName, email, age} = person;
                    return (
                        <div className = 'item' key={id}>
                            <h4>{firstName}</h4>
                            <p>{email}</p>
                            <p>{age}</p>
                        </div>
                    )
                })}
            </article>

        </>
    );
};

export default MultipleInputs;
