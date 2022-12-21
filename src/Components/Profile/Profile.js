import React from 'react';
import userImg from '../../img/hafiz-pic.jpg'
import './Profile.css'

const Profile = () => {
    return (
        <div>
            <div className="profile-container">
                <img src={userImg} alt="" />
                <p>Md Hafizur Rahman</p>
            </div>
            <div className="user-details">
                <div className="weight">
                    <p>75<small>kg</small></p>
                    <p className='user-footer'>Weight</p>
                </div>
                <div className="weight">
                    <p>5.6<small></small></p>
                    <p className='user-footer'>Height</p>
                </div>
                <div className="weight">
                    <p>30<small>Yrs</small></p>
                    <p className='user-footer'>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;