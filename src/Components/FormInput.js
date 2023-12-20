import React from 'react'
import AddTask from './AddTask'
import SearchItem from './SearchItem'

const FormInput = ({ newItem, setNewItem, handleSubmitItem, search, setSearch }) => {
    return (
        <div className='Form-Inputs'>
            <AddTask
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmitItem={handleSubmitItem}
            />
            <SearchItem
                search={search}
                setSearch={setSearch} />
        </div>
    )
}

export default FormInput