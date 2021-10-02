import ReactPlayer from 'react-player'

const Banner = ({ videoURL }) => {
  return (
    <div className='relative h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]'>
      <ReactPlayer url={videoURL} width='100%' height='100%' playing={true} />
      <div className='absolute top-1/2 w-full text-center'>
        <button className='text-white px-10 py-4 bg-blue-700 rounded-full shadow-md font-bold my-5 hover:shadow-xl active:scale-90 transition duration-150'>
          GET STARTED
        </button>
      </div>
    </div>
  )
}

export default Banner
