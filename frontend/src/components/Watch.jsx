import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import movietrailer from '../images/movietrailer.mp4'

function Watch() {
  return (
    <div className='relative'>
      <div  className='absolute flex items-center m-[30px] text-white cursor-pointer z-10'>
        <BiArrowBack className='text-[25px]' />
        <h1 className='font-poppins font-bold text-[20px] pl-[10px]'>Home</h1>
      </div>
      <video className='w-[100%] h-[100%] object-cover' autoPlay controls>
        <source src={movietrailer} />
      </video>
    </div>
  )
}

export default Watch