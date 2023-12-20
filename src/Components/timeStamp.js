import React, { useState, useEffect } from 'react';

const TimeStamp = () => {
    const [date, setDate] = useState(new Date());

    // Update the date state every second
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        // Clear interval on unmount
        return () => {
            clearInterval(timer);
        };
    }, []);

    // // Format the date
    // const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
    // const monthDayYear = date.toLocaleString('default', { month: 'short', day: '2-digit', year: 'numeric' });
    // const time = date.toLocaleString('default', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

    const dayOfWeek = date.toLocaleString('default', { weekday: 'long' });
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();
    const time = date.toLocaleString('default', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

    // Function to add suffix to the day
    const getDayWithSuffix = (day) => {
        if (day % 10 === 1 && day !== 11) {
            return `${day}st`;
        } else if (day % 10 === 2 && day !== 12) {
            return `${day}nd`;
        } else if (day % 10 === 3 && day !== 13) {
            return `${day}rd`;
        } else {
            return `${day}th`;
        }
    };


    return (
        <div className='time-stamp'>
            {/* <p>{dayOfWeek} {monthDayYear} </p>  */}
            {/* <p>{time}</p> */}
            <p>{dayOfWeek} &nbsp; {month} {getDayWithSuffix(day)}, {year} </p>
            <p> {time}</p>
        </div>
    );
};

export default TimeStamp;
