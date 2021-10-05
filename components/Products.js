import Image from 'next/image'
const Products = ({ products, medical }) => {
  return (
    <div className='flex space-x-4 overflow-scroll scrollbar-hide pl-10 pr-10 pb-8'>
      <div className='flex flex-col pl-6 lg:pl-8 mb-10 bg-[#f5f5f5] shadow-lg rounded-md px-8 py-8'>
        <div className='relative flex items-center px-16 h-20 lg:h-40 cursor-pointer text-sm ml-10 hover:scale-95 transform transition duration:300 easy-in-out'>
          <Image
            src='https://res.cloudinary.com/minakshi-nayak/image/upload/v1633106783/medSchool_pvztrt.jpg'
            layout='fill'
            objectFit='contain'
            objectPosition='left'
          />
        </div>
        <div className='flex flex-col items-start  p-6 flex-shrink'>
          <h2 className='text-md md:text-lg lg:text-xl  font-semibold lg:font-bold rounded-lg text-blue-600'>
            Surgery Basics
          </h2>
        </div>

        <div className='flex flex-col items-start px-6 flex-shrink'>
          {products.map((data) => (
            <div
              className='flex items-start justify-end text-gray-400 pb-2'
              key={data.id}
            >
              <div className='flex-1'>{data.message}</div>
            </div>
          ))}
        </div>
        <div className='relative ml-10 lg:ml-80 h-20 lg:h-30 cursor-pointer text-sm'>
          <Image
            src='https://res.cloudinary.com/minakshi-nayak/image/upload/v1633191355/en_badge_web_generic_veaw0u.png'
            layout='fill'
            objectFit='contain'
            objectPosition='left'
          />
        </div>
      </div>
      <div className='flex flex-col pl-6 lg:pl-8 mb-10 bg-[#f5f5f5] shadow-lg rounded-md px-8 py-8'>
        <div className='relative flex items-center px-16 h-20 lg:h-40 cursor-pointer text-sm ml-10 hover:scale-95 transform transition duration:300 easy-in-out'>
          <Image
            src='https://res.cloudinary.com/minakshi-nayak/image/upload/v1633106799/4dMedical_v60byq.jpg'
            layout='fill'
            objectFit='contain'
            objectPosition='left'
          />
        </div>
        <div className='flex flex-col items-start  p-6 flex-shrink'>
          <h2 className='text-md md:text-lg lg:text-xl  font-semibold lg:font-bold rounded-lg text-blue-600'>
            4D Medical
          </h2>
        </div>

        <div className='flex flex-col items-start  px-6 flex-shrink'>
          {medical.map((data) => (
            <div
              className='flex items-start justify-end text-gray-400 pb-2'
              key={data.id}
            >
              <div className='flex-1'>{data.message}</div>
            </div>
          ))}
        </div>
        <div className='relative ml-10 lg:ml-80 h-20 lg:h-30cursor-pointer text-sm'>
          <Image
            src='https://res.cloudinary.com/minakshi-nayak/image/upload/v1633191355/en_badge_web_generic_veaw0u.png'
            layout='fill'
            objectFit='contain'
            objectPosition='left'
          />
        </div>
      </div>
    </div>
  )
}

export default Products
