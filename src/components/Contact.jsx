import React from 'react'


export const Contact = () => {
  return (
<div>
    <h2 className='font-bold text-center text-4xl mt-10'>Contact Form</h2>
  <form className="max-w-sm mx-auto mt-10 bg-gray-100 rounded-md p-16">
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


