import React from 'react'

export const Membership = () => {
  return (
    <div className="container flex flex-col mx-auto mt-10 p-16 text-center justify-center items-center space-y-6 md:text-left">
        <h3 className="font-bold text-3xl md:text-4xl">
            Membership Requirements
        </h3>
        <ol type='1' className='text-left text-sm'>
            <li>1. Filling a membership form</li>
            <li>2. A membership fee of 100,000/=</li>
            <li>3. 4 current passport photos</li>
            <li>4. Subscription / Share Capital of not less than One million shillings (1,000,000/=) OR 300 US Dollars.</li>
            <li>5. A photocopy of National ID or Passport</li>
        </ol>
        <p>Note: An electronic ID will be provided after from your membership fee.</p>
        <div>
            
            <a href="#" className="p-3 px-6 pt-2 text-white rounded-full bg-gray-700 baseline hover:bg-gray-900">
                Download form 
            </a>
        </div>

        <form className="max-w-md mx-auto text-left bg-gray-100 my-16 p-16 rounded-md">
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
            Name:
            </label>
            <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 rounded-md p-2"
            required
            />
        </div>

        <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">
            Phone:
            </label>
            <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full border border-gray-300 rounded-md p-2"
            required
            />
        </div>

        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
            Email:
            </label>
            <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded-md p-2"
            required
            />
        </div>

        <div className="mb-4">
            <label htmlFor="comments" className="block text-gray-700">
            Comments:
            </label>
            <textarea
            id="comments"
            name="comments"
            className="w-full border border-gray-300 rounded-md p-2"
            required
            ></textarea>
        </div>

        <button
            type="submit"
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
            Submit
        </button>
    </form>
    </div>
  )
}
