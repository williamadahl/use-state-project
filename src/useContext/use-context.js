import React, {useState, useContext} from 'react'
import {data} from '../data/data'

const PersonContext = React.createContext();
/* has two components : Provider and consoomer */

const UseContext = () => {
    const [people,setPeople] = useState(data);
    const removePerson = (id) =>{
        setPeople((people) => {
            return people.filter((person) => person.id != id);
        })
    }
    return (
        <PersonContext.Provider value={{removePerson, people}}>
            <h3> Context API / UseContext</h3>
            <List/>
        </PersonContext.Provider>
    );
};
const List = () => {
    const peopleList = useContext(PersonContext);
    return (
        <>
            {peopleList.people.map((person) => {
                return <SinglePerson key={person.id} {...person} />
            })}
        </>
    );
};
const SinglePerson = ({id, name}) =>{
    const {removePerson} = useContext(PersonContext);
    return (
        <div className ='item'>
            <h4>{name}</h4>
            <button onClick={()=>removePerson(id)}>remove</button>
        </div>
    );
};

export default UseContext;