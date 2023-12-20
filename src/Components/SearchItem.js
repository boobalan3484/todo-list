import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";


const SearchItem = ({ search, setSearch }) => {
    return (
        <form className='searchForm'
            onSubmit={(e) => e.preventDefault()} >
            <span>
                <AiOutlineSearch />
            </span>
            <input
                type='text'
                id='search'
                placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}

            />
            <label htmlFor='search'></label>
        </form>
    )
}

export default SearchItem