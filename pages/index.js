import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Banner from '../components/Banner'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Team from '../components/Team'
import Contact from '../components/Contact'

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

const services = [
  {
    id: 1,
    title: 'Editorials',
    message:
      'We provide services to convert e-books and other printed books to digital, fully interactive 4D books.',
  },
  {
    id: 2,
    title: 'Authors',
    message:
      'If you are an author, and would like us to convert your book into a fully digital and interactive 4D book, we have options for you!',
  },
  {
    id: 3,
    title: 'Collaboration',
    message: 'Let us know if you would like to join our collaborative team ',
  },
]

const features = [
  {
    id: 1,
    title: 'Interactive: 3D models, labels and anatomy layers',
    image:
      'https://res.cloudinary.com/minakshi-nayak/image/upload/v1633268695/Interactive_3d_a2ylty.png',
  },
  {
    id: 2,
    title: 'Simplified animations of complex surgeries',
    image:
      'https://res.cloudinary.com/minakshi-nayak/image/upload/v1633268604/Simplified_animation_kbksvs.png',
  },
  {
    id: 3,
    title: 'Highlight, comment and bookmark your textbook! ',
    image:
      'https://res.cloudinary.com/minakshi-nayak/image/upload/v1633268752/Text_book_kqozsk.png',
  },
  {
    id: 4,
    title: 'Complement your learning with selected web results',
    image:
      'https://res.cloudinary.com/minakshi-nayak/image/upload/v1633268669/Web_Search_lhskbn.png',
  },
]

const authors = [
  {
    id: 1,
    designation: 'Architech',
    first_name: 'Kartik',
    last_name: 'Mulgund',
    profile_pic:
      'https://res.cloudinary.com/minakshi-nayak/image/upload/v1630071587/KartikMulgund_lbnz09_ntoiaw.png',
  },
  {
    id: 2,
    designation: 'Developer',
    first_name: 'Prasad',
    last_name: 'Mulgund',
    profile_pic:
      'https://res.cloudinary.com/minakshi-nayak/image/upload/v1630071587/PrasadParab_zwtquo_aakv4x.jpg',
  },
  {
    id: 3,
    designation: 'Developer',
    first_name: 'Bandenamaj',
    last_name: 'Mulla',
    profile_pic:
      'https://res.cloudinary.com/minakshi-nayak/image/upload/v1630071587/avatar_azszsg_jk2ox1.png',
  },
  {
    id: 4,
    designation: 'Developer',
    first_name: 'Pramod ',
    last_name: 'U',
    profile_pic:
      'https://res.cloudinary.com/minakshi-nayak/image/upload/v1630071587/avatar_azszsg_jk2ox1.png',
  },
  {
    id: 5,
    designation: 'Developer',
    first_name: 'Supreeta  ',
    last_name: 'S',
    profile_pic:
      'https://res.cloudinary.com/minakshi-nayak/image/upload/v1633368084/female-306407_960_720_brtriz.webp',
  },
]

export default function Home({ placeholder }) {
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
          <div className='flex flex-col items-center text-center hover:scale-95 transform transition duration:300 easy-in-out'>
            <h1 className='text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold lg:font-bold pb-6  mb-4 rounded-lg text-blue-800'>
              Products
            </h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
            <div className='flex flex-col pl-6 lg:pl-8 mb-10'>
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
            <div className='flex flex-col pl-6 lg:pl-8 mb-20'>
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
        </section>
        <section className='pt-4 bg-[#f5f8fd] rounded-md hover:scale-103 transform transition duration:300 easy-in-out '>
          <div className='flex flex-col items-center text-center bg-[f5f5f5] mb-8 '>
            <h1 className='text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold lg:font-bold pb-6  mb-4 rounded-lg text-blue-800 mt-4'>
              Services
            </h1>
            <div className='flex flex-wrap mx-auto'>
              <div className='flex flex-col pl-6 lg:pl-8 mb-10'>
                {services.map(({ id, title, message }) => (
                  <div
                    className='flex justify-items-start border-b-2 py-6 pr-10'
                    key={id}
                  >
                    <h3 className='font-bold text-md text-left'>{title}</h3>

                    <p className='text-semibold text-sm text-gray-500 text-left pl-10'>
                      {message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className='pt-4rounded-md hover:scale-103 transform transition duration:300 easy-in-out '>
          <div className='flex flex-col items-center text-center mb-4 lg:mb-8'>
            <h1 className='text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold lg:font-bold pb-6  mb-4 rounded-lg text-blue-800 mt-4'>
              Features
            </h1>
          </div>
          {features.map(({ id, title, image }) => (
            <Features key={id} title={title} image={image} />
          ))}
        </section>
        <section className='pt-2 lg:pt-6'>
          <About />
        </section>
        <section className='pt-2 lg:pt-8 items-center'>
          <h2 className='text-2xl md:text-4xl text-gray-500 font-semibold pb-5 items-center text-center'>
            Team Members
          </h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-10 ml-4'>
            {authors.map(
              ({ id, first_name, last_name, profile_pic, designation }) => (
                <Team
                  key={id}
                  profile_pic={profile_pic}
                  first_name={first_name}
                  last_name={last_name}
                  designation={designation}
                />
              )
            )}
          </div>
        </section>
        <section className='pt-8 pb-10 items-center'>
          <Contact placeholder={placeholder} />
        </section>
      </main>
      <Footer />
    </div>
  )
}
