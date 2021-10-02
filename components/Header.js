import Image from 'next/image'
import { MenuIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const router = useRouter()

  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <>
      <header className='sticky flex flex-wrap justify-between items-center w-full mx-auto top-0 py-6 z-30 bg-[#f5f5f5] shadow-xl px-6 md:px-10 text-white gradiant border-b'>
        <div
          className='relative flex items-center px-16 h-8 cursor-pointer text-sm'
          onClick={() => router.push('/')}
        >
          <Image
            src='https://res.cloudinary.com/minakshi-nayak/image/upload/v1632981439/livinglearnings_mjwt3p.png'
            layout='fill'
            objectFit='cover'
            objectPosition='left'
          />
        </div>

        <div className='hidden md:inline-flex items-center justify-end space-x-10'>
          <div className='flex items-center text-blue-500 hover:text-blue-900'>
            <p className='header-p'>HOME</p>
          </div>
          <div className='flex items-center text-blue-900 hover:text-blue-500 space-x-8'>
            <p className='header-p'>PRODUCTS</p>
            <p className='header-p'>SERVICES</p>
            <p className='header-p'>ABOUT US</p>
            <p className='header-p'>CONTACT US</p>
          </div>
        </div>
        <div className='block md:hidden pr-3' x-data='{menuOpened:false}'>
          <MenuIcon
            className='h-6 cursor-pointer text-blue-500'
            onClick={() => setMenuOpened(!menuOpened)}
          />
        </div>
      </header>
      {menuOpened && (
        <div className='flex flex-col md:hidden items-center justify-center mx-auto mt-6 px-10 overflow-scroll bg-white max-w-[240px] max-h-[260px]  text-black rounded-lg hover:shadow-2xl border mb-4'>
          <div className='flex items-center text-blue-500 hover:text-blue-900 py-3'>
            <p className='header-p-mobile'>HOME</p>
          </div>
          <div className='flex items-center text-blue-900 hover:text-blue-500 py-3'>
            <p className='header-p-mobile'>PRODUCTS</p>
          </div>
          <div className='flex items-center text-blue-900 hover:text-blue-500 py-3'>
            <p className='header-p-mobile'>SERVICES</p>
          </div>
          <div className='flex items-center text-blue-900 hover:text-blue-500 py-3'>
            <p className='header-p-mobile'>ABOUT US</p>
          </div>
          <div className='flex items-center text-blue-900 hover:text-blue-500 py-3'>
            <p className='header-p-mobile'>CONTACT US</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
