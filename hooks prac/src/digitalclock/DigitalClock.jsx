import React, { useState, useEffect } from 'react'

const DigitalClock = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    const formatLeadingWithZero = (num) => {
        return num < 10 ? `0${num}` : num;
    }
    const formatHour = (hour) => {
        return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    }

    const formatDate = (date) => {
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
        return date.toLocaleDateString(undefined, options);
    }

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
            <div className='card w-25' style={{ border: "3px solid orange" }}>
                <div className='card-title text-center p-2' style={{ color: "orange", fontWeight: "bold" }}>Digital Clock</div>
                <div className='card-text text-center p-2' style={{ fontWeight: "bold" }}>{formatLeadingWithZero(formatHour(currentTime.getHours()))} : {formatLeadingWithZero(currentTime.getMinutes())} : {formatLeadingWithZero(currentTime.getSeconds())}</div>
                <div className='card-text text-center p-2' style={{ fontWeight: "bold" }}>{formatDate(currentTime)}</div>
            </div>
        </div>
    )
}

export default DigitalClock

// Learned returning the element through function along with conditions