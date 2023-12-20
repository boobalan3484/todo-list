import React, { useRef } from 'react'
import { AiOutlineSend } from "react-icons/ai";

const AddTask = ({ newItem, setNewItem, handleSubmitItem }) => {
    const inputRef = useRef()

    return (
        <form className='task-parent' onSubmit={(e) => handleSubmitItem(e)}>
            <div className='add-task'>
                <input
                    id='addItem'
                    type='text'
                    pattern="^[A-Za-z\s[0-9]]{1,}$"
                    required
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    ref={inputRef}
                />
                <label htmlFor="AddTask">What do you have planned? </label>
            </div>
            <button
                className='add-task-button'
                type='submit'
                aria-label='AddItem'
                onClick={()=> inputRef.current.focus()}
                >
                <AiOutlineSend />
            </button>
        </form>
    );
};

export default AddTask;
