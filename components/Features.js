import Image from 'next/image'

const Features = ({ image, title }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mx-auto items-center text-center'>
      <div className='flex flex-col pl-4 lg:pl-6 lg:mb-6'>
        <h1 className='text-md md:text-lg lg:text-xl  font-semibold lg:font-bold rounded-lg text-blue-700 hover:text-blue-400'>
          {title}
        </h1>
      </div>

      <div className='flex flex-col lg:mb-10'>
        <div className='relative items-center h-80 w-80 cursor-pointer text-sm ml-10 mr-12 lg:mr-8'>
          <Image
            src={image}
            layout='fill'
            objectFit='contain'
            objectPosition='left'
          />
        </div>
      </div>
    </div>
  )
}

export default Features
