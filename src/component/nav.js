import React from 'react'
import './CSS/style.css'
import { Link } from 'react-router-dom';
import { MdRestaurantMenu } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';

const Nav = () => {
    return (
        <>
            <div className="navBar">
                <div className="menu">
                    <Link to="/" className='Home'><MdRestaurantMenu className='Home-ico' />Menu</Link>
                </div>
                <div className="menu">
                    <Link to="/about" className='Home'><FcAbout className='Home-ico' />About Us</Link>
                </div>

            </div>
        </>
    )
}

export default Nav