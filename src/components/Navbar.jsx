

import React, { useState } from 'react'
import logo from '../assets/UMOS.jpg'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div>
        <nav className="relative container mx-auto  bg-gray-800 p-6">
            <div className="flex items-center justify-between text-white">
                <div className="pt-2">
                    <Link to="/">
                        <img src={logo} alt="" className='h-5' />
                    </Link>
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link to='/' className='hover:underline'>
                        Home  
                    </Link>
                    <Link to='/about' className='hover:underline'>
                        About Us
                    </Link>
                    <Link to='/services' className='hover:underline'>
                        Services
                    </Link>
                    <Link to='/contact' className='hover:underline'>
                        Contact Us
                    </Link>
                    <Link to='/membership' className='hover:underline'>
                        Membership
                    </Link>
                    <Link to='/gallery' className='hover:underline'>
                        Gallery
                    </Link>
                </div>

                {/* Hamburger */}
                <div onClick={handleClick} className="md:hidden z-10">
                    { !nav ? <FaBars /> : <FaTimes/>}
                </div>

                {/* Mobile Menu */}
                <div className= {!nav ? "hidden" : "absolute w-full top-0 left-0 h-screen flex flex-col justify-center space-y-6 items-center bg-gray-800"}>
                    <Link onClick={handleClick} to='/' className='text-2xl'>
                        Home
                    </Link>
                    <Link onClick={handleClick} to='/about' className='text-2xl'>
                        About Us
                    </Link> 
                    <a href="#" className='text-2xl'>Services</a>  
                    <a href="#" className='text-2xl'>Contact Us</a>  
                    <a href="#" className='text-2xl'>Membership</a>  
                    <a href="#" className='text-2xl'>Gallery</a>  
                </div>
            </div>
        </nav>
    
    </div>
  )
}
