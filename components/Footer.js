const Footer = () => {
  return (
    <div className='grid grid-cols-1 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 '>
      <div className='flex flex-col text-sm items-center text-center'>
        <div className='flex'>
          <h5 className='font-semibold text-blue-500 text-md pl-4'>
            Terms and Conditions
          </h5>
          <p className='text-gray-500 mx-4'>|</p>
          <h5 className='font-semibold text-blue-500 text-md'>
            Privacy Policy
          </h5>
        </div>
        <div className='flex'>
          <h5 className='text-gray-500'>
            © Copyright Living Learnings. All Rights Reserved
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Footer
