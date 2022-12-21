import React, { useEffect, useState } from 'react';
import Calculations from '../Calculation/Calculations';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [timeCart, setTimeCart] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    const handleCourse = (course) => {
        // console.log(course);
        const newTimeCart = [...timeCart, course];
        setTimeCart(newTimeCart)
    }

    return (
        <div className='courses-main-container'>
            <div className='courses-container'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                        handleCourse={handleCourse}
                    >
                    </Course>)

                }
            </div>
            <div className='calculation-container'>
                <Calculations timeCart={timeCart}>
                </Calculations>
            </div>
        </div>

    );
};

export default Courses;