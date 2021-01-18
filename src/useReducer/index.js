import React, {useState, useReducer} from 'react';
import Modal from './Modal'
import {data} from '../data/data'
// Use reducer function
const reducer = (state, action) => {

};
const defaultState = {
    people:[],
    isModalOpen: false,
    modalContent:'hello from modal',
};
const Index = () => {
    const [name, setName]  = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);
    // const [people, setPeople] = useState(data);
    // const [showModal, setShowModal] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name){
            // setShowModal(true);
            // setPeople([...people, {id: new Date().getTime().toString(), name}]);
            // setName('');
        }else{
            // setShowModal(true);
        }
    };
    return (
        <>
            {state.isModalOpen && <Modal modalContent={state.modalContent} />}
            <form onSubmit={handleSubmit} className='form' >
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <button className='btn'>Add name</button>
            </form>
            {state.people.map((person) =>{
                return (
                    <div key={person.id}>
                        <h4>{person.name}</h4>
                </div>
                )
            })}
        </>
    );
};
export default Index;