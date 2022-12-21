import React from 'react';
import Break from '../Break/Break';
import Profile from '../Profile/Profile';

const Calculations = ({ timeCart }) => {
    // console.log(breakTimes)
    let totalTimes = 0;
    for (const course of timeCart) {
        totalTimes = totalTimes + course.duration
        // console.log(totalTimes)

    }
    return (
        <div><Profile></Profile>
            <h2>Add a Break</h2>
            <Break></Break>
            <h5>Total Times <span>{totalTimes} Hours</span></h5>
        </div>
    );
};

export default Calculations;