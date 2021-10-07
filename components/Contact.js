import React, { useState } from 'react'

const Contact = ({ placeholder }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  return (
    <div className='flex flex-col items-center text-center bg-[#f5f8fd] mb-8 shadow-lg rounded-lg'>
      <h1 className='text-2xl lg:text-3xl xl:text-4xl font-semibold lg:font-bold pb-6  mb-4 rounded-lg text-blue-800 mt-4'>
        Contact
      </h1>
      <div className='flex flex-col'>
        <div className='flex flex-col justify-items-center text-center pl-4 lg:pl-6 mb-10 bg-[#f5f5f5] shadow-lg rounded-md mx-10 py-10 pr-6 hover:scale-103 transform transition duration:300 easy-in-out'>
          <h3 className='text-lg font-semibold lg:font-bold pb-6  mb-4 rounded-lg text-gray-500'>
            Send us a message
          </h3>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={placeholder || 'Full Name'}
              className='contact-input'
            />
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder || 'Your Email Address'}
              className='contact-input'
            />
            <input
              type='text'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={placeholder || 'Your Subject'}
              className='contact-input'
            />
            <textarea
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={placeholder || 'Your Message'}
              className='py-6 px-10 rounded-md shadow-md outline-none text-sm text-gray-400 placeholder-gray-400'
            />

            <button className='flex-grow text-sm text-white bg-blue-700 px-10 py-3 font-semibold rounded-lg mt-6'>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
