import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import exampleImage from '../images/5977590.png';
import profileImage from '../images/favicon.png'
import { IoNotifications, IoSearchSharp } from 'react-icons/io5';
import { MdArrowDropDown } from 'react-icons/md';


const Nav = () => {

    const navigate = useNavigate()

    const handlenetflix = () => {
        navigate('/')
    }
    const [clicked, setclicked] = useState(false)
    const [clicked2, setclicked2] = useState(false)
    const [navistop, setnavistop] = useState(true)

    const handleclick = () => {
        setclicked(!clicked)
    }
    const handleclick2 = () => {
        setclicked2(!clicked2)
    }
    window.onscroll = () => {
        setnavistop(window.pageYOffset === 0 ? true : false)
    }

    const handlelogout = () => {
        navigate('/')
    }

  return (
    <div className='max-w-[1170] mx-auto w-[100%] overflow-hidden'>
        <div className={`fixed z-10 top-0 w-[100%] flex justify-between sm:px-[30px] px-[10px] pt-[5px] items-center text-white font-poppins ${navistop ? 'bg-gradient-to-t from-transparent to-black' : 'bg-black'} transition duration-1000 ease-in-out`}>
                    <div className="flex justify-start items-center sm:gap-[30px] gap-[10px]">
                        <figure>
                            <img onClick={handlenetflix} src={exampleImage} className="sm:max-w-[130px] max-w-[80px] cursor-pointer " alt="error" />
                        </figure>
                        <h1 className="cursor-pointer sm:hidden sm:text-[16px] text-[13px] ">Browse</h1>
                        <div onClick={handleclick2} className="cursor-pointer -ml-[15px] relative">
                            <MdArrowDropDown className="ml-[5px] sm:hidden " />
                            <div className={` ${clicked2 ? '' : 'hidden'} sm:hidden w-[175px] absolute top-7 -left-16 bg-[rgba(0,0,0,0.8)] py-2 px-2 rounded-sm`}>
                                <h1 className="cursor-pointer hover:underline text-white  sm:text-[16px] text-[13px] py-[5px]">Home</h1>
                                <h1 className="cursor-pointer hover:underline text-white  sm:text-[16px] text-[13px] py-[5px]">TV Shows</h1>
                                <h1 className="cursor-pointer hover:underline text-white  sm:text-[16px] text-[13px] py-[5px]">Movies</h1>
                                <h1 className="cursor-pointer hover:underline text-white  sm:text-[16px] text-[13px] py-[5px]">New and Popular</h1>
                                <h1 className="cursor-pointer hover:underline text-white  sm:text-[16px] text-[13px] py-[5px]">My List</h1>
                                <h1 className="cursor-pointer hover:underline text-white  sm:text-[16px] text-[13px] py-[5px]">Browse by Languages</h1>
                            </div>
                        </div>
                        <h1 className="cursor-pointer hidden sm:block hover:text-[#cccccc]">Home</h1>
                        <h1 className="cursor-pointer hidden sm:block hover:text-[#cccccc]">TV Shows</h1>
                        <h1 className="cursor-pointer hidden sm:block hover:text-[#cccccc]">Movies</h1>
                        <h1 className="cursor-pointer hidden sm:block hover:text-[#cccccc]">New and Popular</h1>
                        <h1 className="cursor-pointer hidden sm:block hover:text-[#cccccc]">My List</h1>
                        <h1 className="cursor-pointer hidden sm:block hover:text-[#cccccc]">Browse by Languages</h1>
                    </div>
                    <div className="flex justify-start items-center sm:gap-[20px] gap-[10px]">
                        <IoSearchSharp className="cursor-pointer hidden sm:block" />
                        <h1 className="cursor-pointer hidden sm:block">KID</h1>
                        <IoNotifications className="cursor-pointer" />
                        <img className="w-[25px] border-white border-[1px] rounded-full" src={profileImage} alt="error" />
                        <div onClick={handleclick} className="cursor-pointer -ml-[15px] relative">
                            <MdArrowDropDown className="ml-[5px]" />
                            <div className={` ${clicked ? '' : 'hidden'} absolute sm:top-8 sm:-left-11 top-7 -left-12 rounded-sm bg-[rgba(0,0,0,0.8)] py-2 px-4 `}>
                                <h1 className="cursor-pointer hover:underline text-white sm:text-[16px] py-[5px] text-[13px]">Settings</h1>
                                <h1 onClick={handlelogout} className="cursor-pointer hover:underline text-white sm:text-[16px] py-[5px] text-[13px]">Logout</h1>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Nav