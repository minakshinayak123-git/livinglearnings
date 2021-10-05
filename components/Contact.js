import React, { useState } from 'react'

const Contact = ({ placeholder }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  return (
    <div className='flex flex-col items-center text-center bg-[#f5f8fd] mb-8 shadow-lg rounded-lg'>
      <h1 className='text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold lg:font-bold pb-6  mb-4 rounded-lg text-blue-800 mt-4'>
        Contact
      </h1>
      <div className='flex flex-col flex-wrap mx-auto'>
        <div className='flex flex-col justify-items-center text-center pl-6 lg:pl-8 mb-10 bg-[#f5f5f5] shadow-lg rounded-md px-10 py-10 hover:scale-103 transform transition duration:300 easy-in-out'>
          <h3 className='text-lg font-semibold lg:font-bold pb-6  mb-4 rounded-lg text-gray-500'>
            Send us a message
          </h3>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={placeholder || 'Full Name'}
              className='flex-grow py-2 px-8 bg-while rounded-md shadow-md outline-none text-sm text-gray-400 placeholder-gray-400'
            />
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder || 'Your Email Address'}
              className='flex-grow py-2 px-8 bg-while rounded-md shadow-md outline-none text-sm text-gray-400 placeholder-gray-400'
            />
            <input
              type='text'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={placeholder || 'Your Subject'}
              className='flex-grow py-2 px-8 bg-while rounded-md shadow-md outline-none text-sm text-gray-400 placeholder-gray-400'
            />
            <textarea
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={placeholder || 'Your Message'}
              className='flex-grow py-6 px-6 bg-while rounded-md shadow-md outline-none text-sm text-gray-400 placeholder-gray-400'
            />

            <button className='flex-grow text-sm text-white bg-blue-700 px-10 py-3  font-semibold rounded-lg mt-5'>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
