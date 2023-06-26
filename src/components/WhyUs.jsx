import React from 'react'

export const WhyUs = () => {
  return (
    <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
        <div className="flex flex-col space-y-12 md:w-1/2">
             <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                Why you should transact with us?
            </h2>
            <p className="max-w-sm text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit dolorum nesciunt repellat ipsam non omnis doloremque odio atque veritatis?
            </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2">
            <div
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
            >
              <div className="rounded-l-full bg-gray-200 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div
                    className="px-4 py-2 text-white rounded-full md:py-1 bg-gray-900"
                  >
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                   Lorem ipsum dolor sit amet.
                  </h3>
                </div>
              </div>
  
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p className="text-darkGrayishBlue">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, 
                 eos perferendis quia modi dolorum aspernatur labore dignissimos
                  quod, quidem accusamus voluptatibus distinctio, voluptatum voluptatem odit!
                </p>
              </div>
            </div>
            <div
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
            >
              <div className="rounded-l-full bg-gray-200 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div
                    className="px-4 py-2 text-white rounded-full md:py-1 bg-gray-900"
                  >
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Lorem ipsum dolor sit amet.
                  </h3>
                </div>
              </div>
  
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                Lorem ipsum dolor sit amet.
                </h3>
                <p className="text-darkGrayishBlue">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, 
                  eos perferendis quia modi dolorum aspernatur labore dignissimos
                    quod, quidem accusamus voluptatibus distinctio, voluptatum voluptatem odit!
                </p>
              </div>
            </div>
            <div
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
            >
              <div className="rounded-l-full bg-gray-200 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div
                    className="px-4 py-2 text-white rounded-full md:py-1 bg-gray-900"
                  >
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                   Lorem ipsum dolor sit amet.
                  </h3>
                </div>
              </div>
  
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p className="text-darkGrayishBlue">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, 
                  eos perferendis quia modi dolorum aspernatur labore dignissimos
                    quod, quidem accusamus voluptatibus distinctio, voluptatum voluptatem odit!
                </p>
              </div>
            </div>

        </div>
    </div>
  )
}
