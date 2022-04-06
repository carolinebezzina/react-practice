import React, { useState, useEffect } from 'react'

export const CurrentTime = () => {

    var [date, setDate] = useState(new Date());

    useEffect(() => {

        var timer = setInterval(() => setDate(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer)
        }

    });

    return(
       <span>{date.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})}</span>
    )

}

export default CurrentTime