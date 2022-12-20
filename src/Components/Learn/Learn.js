import React from 'react';
import Calculations from '../Calculation/Calculations';
import Courses from '../Courses/Courses';
import './Learn.css'

const Learn = () => {
    return (
        <div className='courses-main-container'>
            <div className="courses-body">
                <Courses></Courses>
            </div>
            <div className="calculations-body">
                <Calculations></Calculations>
            </div>
        </div>
    );
};

export default Learn;