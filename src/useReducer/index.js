import React, {useState, useReducer} from 'react';
import Modal from './Modal'
import {data} from '../data/data'
import {reducer} from './reducer'
// Use reducer function


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
            const newItem = {id: new Date().getTime().toString(), name};
            dispatch({type: 'ADD_ITEM', payload: newItem});
            setName('');
            // setShowModal(true);
            // setPeople([...people, {id: new Date().getTime().toString(), name}]);
            // setName('');
        }else{
            // setShowModal(true);
            dispatch({type: 'NO_ITEM'});
        }
    };
const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'});
};
return (
        <>
            {state.isModalOpen && (<Modal closeModal={closeModal} modalContent={state.modalContent} /> )}
            <form onSubmit={handleSubmit} className='form' >
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <button className='btn'>Add name</button>
            </form>
            {state.people.map((person) =>{
                return (
                    <div key={person.id} className='item'>
                        <h4>{person.name}</h4>
                        <button onClick={() => dispatch({type: 'REMOVE_ITEM', payload:person.id})}> Remove </button>
                    </div>
                )
            })}
        </>
    );
};
export default Index;