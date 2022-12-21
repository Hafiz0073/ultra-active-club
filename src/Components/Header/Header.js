import React from 'react';
import logo from '../../years1.png';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" /><span className='logo-tag'>To Create Pro</span><span className='tag-special' > Developer</span>
        </nav>
    );
};

export default Header;