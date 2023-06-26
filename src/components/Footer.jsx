import React from 'react'
import logo from '../assets/UMOS.jpg'
import instagram from '../assets/icon-instagram.svg'
import twitter from '../assets/icon-twitter.svg'
import facebook from '../assets/icon-facebook.svg'
import youtube from '../assets/icon-youtube.svg'

export const Footer = () => {
  return (
    <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto mt-16 space-y-8 bg-gray-700 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
                Copyright &copy; 2023, All Rights Reserved
            </div>
            <div>
                <img src={logo} className="h-8" alt=""/>
            </div>
            <div className="flex justify-center space-x-4">
                <a href="#">
                    <img src={facebook} className="h-8" alt=""/>
                </a>
                <a href="#">
                    <img src={twitter} className="h-8" alt=""/>
                </a>
                <a href="#">
                    <img src={instagram} className="h-8" alt=""/>
                </a>
                <a href="#">
                    <img src={youtube} className="h-8" alt=""/>
                </a>
                
            </div>
        </div>
        
        <div className="flex flex-col space-y-3 text-white text-center">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Membership</a>
            <a href="#" className="hover:underline">Gallery</a>
        </div>

            <div className="flex flex-col justify-between space-y-3">
                <form>
                    <div className="flex space-x-3">
                        <input type="email" className='flex-1 px-4 rounded-full focus:outline-none' placeholder='Enter your email' />
                        <button className="px-6 py-2 text-white rounded-full bg-gray-500 hover:bg-brightRedLight focus:outline-none">
                            Submit
                        </button>
                    </div>
                </form>
                <div className="flex flex-col text-white space-y-2 text-center">
                    <h3 className="font-bold">Email: <a href='#'>info.umosta.org</a></h3>
                    <h3>Tel: (+256) 704762626, 0701181901  </h3>
                </div>
                <div className="hidden text-white md:block">
                    Copyright &copy; 2023, All Rights Reserved
                </div>
            </div>
    </div>
  )
}
