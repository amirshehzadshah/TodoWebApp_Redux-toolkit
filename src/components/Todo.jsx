import React, { useState } from 'react'
import '../App.css'
import { FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, deleteTodos, removeAllTodos } from '../redux/todoSlices'; // Import your action

const Todo = () => {

    const [todoInput, setTodoInput] = useState('');
    const dispatch = useDispatch();
    const todosArray = useSelector(state => state.todoSlices.todos)
    // console.log(todosArray)
    const [indexToRemove, setIndexToRemove] = useState(-1); // Track the index to remove

    const handleInputChange = (e) => {
        setTodoInput(e.target.value);
    }

    const handleAddInput = () => {
        dispatch(addTodos(todoInput));
        setTodoInput(''); // Clear the input after adding to the array
    }

    const handleRemoveInput = (index) => {
        setIndexToRemove(index); // Reset the indexToRemove state
        dispatch(deleteTodos(index));
    }

    const handleClearInput = () => {
        dispatch(removeAllTodos()); // Reset the state
    }
    // console.log(todosArray.length)
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <figcaption>Hello Your List Here ✌️</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type='text' placeholder='✍️ Add Items ...' className='addItems-input' value={todoInput} onChange={handleInputChange} />
                        <FaPlus className='icon-add' onClick={handleAddInput} />
                    </div>
                    <div className='todoItems'>
                        {todosArray.map((value, index) => (
                            <div className='todoitems-container'>
                            <div key={index} className='todoItems-child'>
                                {value}
                            </div>
                                <div className='todoItems-icon-remove' onClick={() => handleRemoveInput(index)}>
                                    <MdDeleteForever />
                                </div>
                            </div>
                        ))}
                        {todosArray.length > 0 && (
                            <button className='todoItems-allclear' onClick={handleClearInput}>Clear All</button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo