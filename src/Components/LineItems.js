import React from "react"
import { AiOutlineClose } from "react-icons/ai";

const LineItems = ({ item, handleCheck, handleTrash }) => {
    return (
        <li className='data-list-items' key={item.id}>
            <input
                type='checkbox'
                checked={item.checked}
                onChange={() => { handleCheck(item.id) }}
            />

            <label
                style={(item.checked) ? { color: 'gray', textDecoration: 'line-through' } : null}
                onDoubleClick={() => { handleCheck(item.id) }}
            >
                {item.label}
            </label>

            <button
                tabIndex="0"
                aria-label={`Delete: ${item.label}`}
                className='close-icon'
                onClick={() => { handleTrash(item.id) }}>
                <AiOutlineClose />
            </button>

        </li>
    )
}

export default LineItems