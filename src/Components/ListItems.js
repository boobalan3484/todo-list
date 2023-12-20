import React from 'react'
import LineItems from './LineItems'


const ListItems = ({ items, handleCheck, handleTrash }) => {
    return (
        <ul>
            {items.map((item) => (
                <LineItems
                    item={item}
                    key={item.id}
                    handleCheck={handleCheck}
                    handleTrash={handleTrash} />
            ))}
        </ul>
    )
}

export default ListItems
