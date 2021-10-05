const Services = ({ services }) => {
  return (
    <div className='bg-[f5f5f5] p-8 lg:p-10'>
      <div className='flex flex-col items-center text-center'>
        <h1 className='text-2xl lg:text-3xl xl:text-4xl font-semibold lg:font-bold pb-6  mb-4 rounded-lg text-blue-800 mt-4'>
          Services
        </h1>
      </div>
      {services.map(({ id, title, message }) => (
        <div key={id} className='grid grid-cols-2 mx-auto border-b-2 pb-4 pt-4'>
          {/* <div className='flex flex-col pl-6 lg:pl-8 mb-10' key={id}>
            <div className='flex'> */}
          <h3 className='font-bold text-md text-left'>{title}</h3>

          <p className='text-semibold text-sm text-gray-500 text-left'>
            {message}
          </p>
          {/* </div>
          </div> */}
        </div>
      ))}
    </div>
  )
}

export default Services
