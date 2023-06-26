import React from 'react'

export const Objectives = () => {
  return (
    <div className="container flex flex-col mx-auto mt-10 p-16 text-center justify-center items-center space-y-6 md:text-left">
        <h3 className="font-bold text-3xl md:text-4xl">
            About Us
        </h3>
        <p >
        Uganda Motor Spare Traders Association (UMOSTA) was founded in 2011 and registered in 2012
         as a company limited by guarantee and has no share capital, by the business community of motor spare 
        traders, dealing in importation and distribution of motorcycle spares, rubber and lubricants in Uganda.
        </p>
        UMOSTA unites the members into an association focused on the business of motorcycle spare parts and
         lubricants in Uganda. UMOSTA has
         presence in 88 districts in Uganda, with each district having a management committee.
        <div>
            <a href="#" className="p-3 px-6 pt-2 text-white rounded-full bg-gray-700 baseline hover:bg-gray-900">
                Read more
            </a>
        </div>
    </div>
  )
}
