import React from 'react';
import Break from '../Break/Break';
import Profile from '../Profile/Profile';
import './Calculation.css'

const Calculations = ({ timeCart }) => {
    // console.log(breakTimes)
    let totalTimes = 0;
    for (const course of timeCart) {
        totalTimes = totalTimes + course.duration
        // console.log(totalTimes)

    }
    return (
        <div><Profile></Profile>
            <h3 className='add-break'>Add a Break</h3>
            <Break></Break>
            <h5 className='total-times'>Total Times <span>{totalTimes} Hours</span></h5>
        </div>
    );
};

export default Calculations;