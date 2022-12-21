import React, { useState } from 'react';
import './Break.css'

const Break = () => {
    const [breaktimeNew, setBreakTime] = useState(0)
    const getBreakTime = parseInt(breaktimeNew)
    const handleBreak = (a) => {
        const breakTime = [a, breaktimeNew];
        setBreakTime(breakTime)
        // console.log(breakTime)


    }

    return (
        <div className='break'>
            <div className="break-btn">
                <button onClick={() => handleBreak(30)}>30s</button>
                <button onClick={() => handleBreak(40)}>40s</button>
                <button onClick={() => handleBreak(70)}>70s</button>
                <button onClick={() => handleBreak(80)}>80s</button>
            </div>

            <h2>{getBreakTime}</h2>
        </div>
    );
};

export default Break;