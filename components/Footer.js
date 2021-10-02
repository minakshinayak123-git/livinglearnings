const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 items-center text-center'>
      <div className='flex flex-col text-sm text-gray-500'>
        <div className='flex'>
          <h5 className='font-semibold text-blue-500 text-md pl-4'>
            Terms and Conditions
          </h5>
          <p className='text-gray-500 mx-4'>|</p>

          <h5 className='font-semibold text-blue-500 text-md'>
            Privacy Policy
          </h5>
        </div>

        <h5>© Copyright Living Learnings. All Rights Reserved</h5>
      </div>
    </div>
  )
}

export default Footer
