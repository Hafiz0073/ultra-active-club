import React from 'react';
import './Course.css'

const Course = ({ course }) => {
    const { id, img, courseName, Details, duration } = course;
    return (
        <div className='course-container'>
            <img src={img} alt="" />
            <div className='course-info'>
                <p className='course-name'>{courseName}</p>
                <p>{Details}</p>
                <p><small>Course Duration : {duration} Minutes</small></p>
            </div>
            <button className='btn-course'><p>Add to Courses List</p></button>

        </div>
    );
};

export default Course;