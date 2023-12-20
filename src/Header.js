import React from 'react'
import TimeStamp from './Components/timeStamp'

const Header = ({title}) => {

    return (
        <header>
            <TimeStamp />

            <h2 className='App-title'> {title} </h2>
        </header>
    )

}

Header.defaultProps = {
    title : "To Do List"
}

export default Header