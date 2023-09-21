import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import movietrailer from '../images/movietrailer.mp4'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import YouTube from 'react-youtube';

function Watch() {

  const navigate = useNavigate()

  const location = useLocation()

  const [key, setkey] = useState('')

  const handlehome = () => {
    navigate('/home')
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    const subscription = user.subscription
    if (subscription === 'yes') {
      navigate('/watch')
    }
    else {
      navigate('/step21')
    }

    const lskey = new URLSearchParams(location.search).get('key');
    setkey(lskey)

  }, [])

  const opts = {
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 1,
      showInfo: 1,
    },
  };

  return (
    <div className='relative bg-black h-[100%]'>
      <div className='absolute flex items-center m-[30px] text-white cursor-pointer z-10'>
        <BiArrowBack onClick={handlehome} className='text-[25px]' />
        <h1 className='font-poppins font-bold text-[20px] pl-[10px]'>Home</h1>
      </div>

      <div className='flex justify-center items-center h-[100vh]'>
        <div>
          <YouTube videoId={key} opts={opts} />
        </div>
      </div>

    </div>
  )
}

export default Watch