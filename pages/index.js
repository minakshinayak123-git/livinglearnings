import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'

const products = [
  {
    id: 1,
    message:
      'An app designed for medical students and physician assistants, during their general surgery rotation and examinations.',
  },
  {
    id: 2,
    message:
      'Organized in a didactic simplified manner using our unique interactive, and multi-sensorial platform to prepare the student for their clinical experience and boards.',
  },
]

const medical = [
  {
    id: 1,
    message: 'An app designed for surgical residents and practicing surgeons.',
  },
  {
    id: 2,
    message:
      'Organized in a didactic, simplified manner using our unique, interactive, and multi-sensorial platform to prepare for surgical examinations and boards.',
  },
]

export default function Home() {
  const videoURL = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'

  return (
    <div>
      <Head>
        <title>Living Learnings</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Banner videoURL={videoURL} />
      <main className='max-width-7xl mx-auto px-2 md:px-8 cursor-pointer bg-white shadow-lg md:shadow-2xl'>
        <section className='pt-6'>
          <div className='flex flex-col items-center text-center hover:scale-95 transform transition duration:300 easy-in-out mb-8'>
            <h1 className='text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold lg:font-bold pb-6  mb-4 rounded-lg text-blue-800'>
              Products
            </h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
            <div className='flex flex-col pl-6 lg:pl-8 mb-10'>
              <div className='relative flex items-center px-16 h-20 lg:h-40 cursor-pointer text-sm ml-10'>
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
            <div className='flex flex-col pl-6 lg:pl-8 mb-20'>
              <div className='relative flex items-center px-16 h-20 lg:h-40 cursor-pointer text-sm ml-10'>
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
        </section>
        <section className='pt-6'>
          <div className='flex flex-col items-center text-center bg-gray-200 hover:scale-103 transform transition duration:300 easy-in-out mb-8 rounded-lg'>
            <h1 className='text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold lg:font-bold pb-6  mb-4 rounded-lg text-blue-800'>
              Services
            </h1>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
