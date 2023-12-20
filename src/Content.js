import React from 'react'
import ListItems from './Components/ListItems';

const Content = ({ items, handleCheck, handleTrash }) => {

    return (

        <>
            {(items.length) ? (
                <ListItems
                    items={items}
                    handleCheck={handleCheck}
                    handleTrash={handleTrash}
                />
            ) : (
                <h4 style={{ color: "red" }}> Your List is Empty </h4>
            )}


            {/* <div className='showLength'
                style={{ marginTop: '50px' }}>
                <p> {items.length} {items.length === 1 ? ' list item' : ' list items'}  </p>
            </div> */}
            {/* <div className='showPending'
                style={{ marginTop: '50px' }}>
                <p> You have ({items.length}) {items.length === 1 ? ' pending task' : ' pending tasks'} to complete</p>
            </div> */}
        </>
    );
}

export default Content