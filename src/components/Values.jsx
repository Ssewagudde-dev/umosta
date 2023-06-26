import React from 'react'
import hardwork from '../assets/hardwork.svg'
import accountability from '../assets/accountability.jpg'
import commitment from '../assets/commitment.jpg'
import respect from '../assets/respect.jpg'
import transparency from '../assets/transparency.jpg'
import unity from '../assets/unity.jpg'

export const Values = () => {
  return (
    <div className="container flex flex-col justify-center items-center text-center mx-auto space-y-5 bg-gray-200">
        <h2 className="font-bold text-4xl mt-10">
            Our Values
        </h2>
        <div className='grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 md:grid-cols-3 p-16'>
            <div className="flex flex-col justify-center items-center bg-gray-100 py-8 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={hardwork} alt="" className='h-40' />
                <h3 className='font-bold text-center text-2xl'>Hardwork</h3>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-100 py-8 px-3 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={unity} alt="" className='h-40' />
                <h3 className='font-bold text-center text-2xl'>Unity</h3>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-100 py-8 px-3 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={commitment} alt="" className='h-40' />
                <h3 className='font-bold text-center text-2xl'>Commitment</h3>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-100 py-8 px-3 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={respect} alt="" className='h-40' />
                <h3 className='font-bold text-center text-2xl'>Respect</h3>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-100 py-8 px-3 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={transparency} alt="" className='h-40' />
                <h3 className='font-bold text-center text-2xl'>Transparency</h3>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-100 py-8 px-3 space-y-3 rounded-[10%] hover:scale-110 duration-500">
                <img src={accountability} alt="" className='h-40' />
                <h3 className='font-bold text-center text-2xl'>Accountability</h3>
            </div>
            
        </div>
    </div>
  )
}
