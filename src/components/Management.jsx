import React from 'react'
import mugenyi from '../assets/mugenyi.png'
import kayondo from '../assets/kayondo.png'
import hussein from '../assets/hussein.png'

export const Management = () => {
  return (
    <div className="container mx-auto text-center mt-10">
        <h2 className="font-bold text-4xl"> 
            Our Management Team
        </h2>
        <div className="flex flex-col justify-center items-center text-center space-y-5 mt-10 md:flex-row md:space-x-8">
            <div className='flex flex-col space-y-2 items-center bg-gray-200'>
                <img src={mugenyi} alt="" className='h-40 py-6 px-3 rounded-[100%]'/>
                <div className='px-3 py-6'>
                    <h2 className="font-bold">Mugenyi Christopher</h2>
                    <h3 className="font-bold">Chairperson</h3>
                    <p>He's the brain behind UMOSTA</p>
                </div>
            </div>
            <div className='flex flex-col space-y-2 items-center bg-gray-200'>
                <img src={kayondo} alt="" className='h-40 py-6 px-3 rounded-[100%]'/>
                <div className='px-3 py-6'>
                    <h2 className="font-bold">Mugenyi Christopher</h2>
                    <h3 className="font-bold">Chairperson</h3>
                    <p>He's the brain behind UMOSTA</p>
                </div>
            </div>
            <div className='flex flex-col space-y-2 items-center bg-gray-200'>
                <img src={hussein} alt="" className='h-40 py-6 px-3 rounded-[100%]'/>
                <div className='px-3 py-6'>
                    <h2 className="font-bold">Mugenyi Christopher</h2>
                    <h3 className="font-bold">Chairperson</h3>
                    <p>He's the brain behind UMOSTA</p>
                </div>
            </div>
            
        </div>
        <div className='pt-16'>
            <a href="#" className="p-3 px-6 pt-2 text-white rounded-full bg-gray-700 baseline hover:">
                View more
            </a>
        </div>
    </div>
  )
}
