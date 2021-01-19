import React, {useState, useReducer} from 'react';
import Modal from './Modal'
import {data} from '../data/data'
// Use reducer function
const reducer = (state, action) => {
    if(action.type === 'ADD_ITEM'){
        const newPeople = [...state.people, action.payload];
        return {
            ...state,
            people:newPeople,
            isModalOpen:true,
            modalContent: 'item added'
        };
    }
    if(action.type === 'NO_ITEM'){
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'please put something inside me'
        };
    }
    throw new Error('no matiching action type');
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
            const newItem = {id: new Date().getTime().toString(), name};
            dispatch({type: 'ADD_ITEM', payload: newItem});
            setName('');
            // setShowModal(true);
            // setPeople([...people, {id: new Date().getTime().toString(), name}]);
            // setName('');
        }else{
            // setShowModal(true);
            dispatch({type: 'NO_ITEM'})
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