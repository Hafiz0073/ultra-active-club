import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='courses-container'>
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}>
                </Course>)

            }
        </div>
    );
};

export default Courses;