const About = () => {
  return (
    <div className='flex flex-col items-center text-center bg-[f5f5f5] mb-8 '>
      <h1 className='text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold lg:font-bold pb-6 mb-4 rounded-lg text-blue-800'>
        About Us
      </h1>
      <div className='flex flex-col flex-wrap mx-auto'>
        <div className='flex flex-col justify-items-center text-center pl-6 lg:pl-8 mb-10'>
          <p>
            Interacting with learning is the core of our products. Our platform
            allows virtually any topic to be experiences in a multi-sensorial
            manner, enhancing the learning experience.
          </p>
        </div>
        <div className='flex flex-col align-left text-center pl-6 lg:pl-8 mb-10'>
          <h3 className='text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold lg:font-bold pb-6  mb-4 rounded-lg text-gray-500'>
            Our Company
          </h3>
          <p className='text-sm lg:text-lg pb-6  mb-4 rounded-lg text-gray-800'>
            Interacting with learning is the core of our products.
          </p>
          <p className='text-sm lg:text-lg pb-6  mb-4 rounded-lg text-gray-800'>
            Our platform allows virtually any topic to be experienced in a
            multi-sensorial manner, enhancing the learning experience
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
