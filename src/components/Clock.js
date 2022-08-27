import { useState, useEffect } from 'react';

function Clock () {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const addTime = () => {
        setTime(new Date().toLocaleTimeString());
    }
    
    useEffect(() => {
        const tickClock = setInterval(() => {
            addTime();
          }, 1000);
        
          return () => clearInterval(tickClock);
    }, [])

    return <h1>{time}</h1>
}

export default Clock;