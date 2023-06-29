import React from 'react'
import hardwork from '../assets/hardwork.svg'
import image1 from '../assets/gallery/1.jpg'
import image2 from '../assets/gallery/2.jpg'
import image3 from '../assets/gallery/3.jpg'
import image4 from '../assets/gallery/4.jpg'
import image5 from '../assets/gallery/5.jpg'
import image6 from '../assets/gallery/6.jpg'
import image11 from '../assets/gallery/11.jpg'
import image12 from '../assets/gallery/12.jpg'
import image13 from '../assets/gallery/13.jpg'
import image14 from '../assets/gallery/14.jpg'
import image16 from '../assets/gallery/16.jpg'
import image17 from '../assets/gallery/17.jpg'
import image18 from '../assets/gallery/18.jpg'
import image20 from '../assets/gallery/20.jpg'
import image21 from '../assets/gallery/21.jpg'
import image22 from '../assets/gallery/22.jpg'
import image25 from '../assets/gallery/25.jpg'

export const Gallery = () => {
  return (
    <div className="container flex flex-col justify-center items-center text-center mx-auto space-y-5 bg-gray-200">
        <h2 className="font-bold text-4xl mt-10">
            Gallery
        </h2>
        <div className='grid grid-cols-2 gap-4 py-8 sm:grid-cols-3 md:grid-cols-6 md:p-16'>
            <div className=" bg-gray-100 py-8 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={image1} alt="" className='w-full h-full' />
            </div>
            <div className=" bg-gray-100 py-8 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={image2} alt="" className='h-40' />
            </div>
            <div className=" bg-gray-100 py-8 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={image3} alt="" className='h-40' />
            </div>
            <div className=" bg-gray-100 py-8 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={image4} alt="" className='h-40' />
            </div>
            <div className=" bg-gray-100 py-8 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={image5} alt="" className='h-40' />
            </div>
            <div className=" bg-gray-100 py-8 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={image6} alt="" className='h-40' />
            </div>
            <div className=" bg-gray-100 py-8 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={image11} alt="" className='h-40' />
            </div>
            <div className=" bg-gray-100 py-8 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={image12} alt="" className='h-40' />
            </div>
            <div className=" bg-gray-100 py-8 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={image13} alt="" className='h-40' />
            </div>
            <div className=" bg-gray-100 py-8 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={image14} alt="" className='w-full h-40' />
            </div>
            <div className=" bg-gray-100 py-8 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={image16} alt="" className='w-full h-40' />
            </div>
            <div className=" bg-gray-100 py-8 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={image17} alt="" className='h-40' />
            </div>
            <div className=" bg-gray-100 py-8 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={image18} alt="" className='h-40' />
            </div>
            <div className=" bg-gray-100 py-8 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={image20} alt="" className='h-40' />
            </div>
            <div className=" bg-gray-100 py-8 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={image21} alt="" className='h-40' />
            </div>
            <div className=" bg-gray-100 py-8 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={image22} alt="" className='h-40' />
            </div>
            <div className=" bg-gray-100 py-8 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={image25} alt="" className='h-40' />
            </div>
            
            
            
        </div>
     </div>
  )
}
