import React, { useState, useEffect, useRef } from "react";
import exampleImage from '../images/5977590.png';
import profileImage from '../images/favicon.png'
import { useNavigate } from "react-router-dom";
import { IoNotifications, IoSearchSharp } from 'react-icons/io5';
import { MdArrowDropDown } from 'react-icons/md';
import { FaPlay } from 'react-icons/fa';
import { BiInfoCircle } from 'react-icons/bi';
import { BiSolidLeftArrow } from 'react-icons/bi'
import { BiSolidRightArrow } from 'react-icons/bi'

import movieImage from '../images/pexels-pixabay-147411.jpg'
import movieTitle from '../images/title.jpg'

const Home = () => {
    const navigate = useNavigate()

    const handlenetflix = () => {
        navigate('/')
    }
    const [clicked, setclicked] = useState(false)
    const [clicked2, setclicked2] = useState(false)
    const [navistop, setnavistop] = useState(true)

    const [type, settype] = useState('')

    const [slidenumber,setslidenumber] = useState(0)

    const handlemovies = () => {
        settype('movie')
    }
    const handletvshows = () => {
        settype('tvshows')
    }
    const handleother = () => {
        settype('')
    }

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

    const listref = useRef()
    const scroll = (direction) => {
        let distance = listref.current.getBoundingClientRect().x - 50
        if (direction==='left' && slidenumber>0){
            listref.current.style.transform = `translateX(${230 + distance}px)`
            setslidenumber(slidenumber-1)
        }
        if (direction==='right' && slidenumber<4){
            listref.current.style.transform = `translateX(${-230 + distance}px)`
            setslidenumber(slidenumber+1)
        }
    }

    return (
        <div>
            <section className="max-w-[1170] mx-auto w-[100%] overflow-hidden " >
                <div className={`fixed z-10 top-0 w-[100%] flex justify-between sm:px-[30px] px-[10px] pt-[5px] items-center text-white font-poppins ${navistop ? 'bg-gradient-to-t from-transparent to-black' : 'bg-black'} transition duration-1000 ease-in-out`}>
                    <div className="flex justify-start items-center sm:gap-[30px] gap-[10px]">
                        <figure>
                            <img onClick={handlenetflix} src={exampleImage} className="sm:max-w-[130px] max-w-[80px] cursor-pointer " alt="error" />
                        </figure>
                        <h1 className="cursor-pointer sm:hidden sm:text-[16px] text-[13px] ">Browse</h1>
                        <div onClick={handleclick2} className="cursor-pointer -ml-[15px] relative">
                            <MdArrowDropDown className="ml-[5px] sm:hidden " />
                            <div className={` ${clicked2 ? '' : 'hidden'} sm:hidden w-[175px] absolute top-7 -left-16 bg-[rgba(0,0,0,0.8)] py-2 px-2 rounded-sm`}>
                                <h1 onClick={handleother} className="cursor-pointer hover:underline text-white  sm:text-[16px] text-[13px] py-[5px]">Home</h1>
                                <h1 onClick={handletvshows} className="cursor-pointer hover:underline text-white  sm:text-[16px] text-[13px] py-[5px]">TV Shows</h1>
                                <h1 onClick={handlemovies} className="cursor-pointer hover:underline text-white  sm:text-[16px] text-[13px] py-[5px]">Movies</h1>
                                <h1 onClick={handleother} className="cursor-pointer hover:underline text-white  sm:text-[16px] text-[13px] py-[5px]">New and Popular</h1>
                                <h1 onClick={handleother} className="cursor-pointer hover:underline text-white  sm:text-[16px] text-[13px] py-[5px]">My List</h1>
                                <h1 onClick={handleother} className="cursor-pointer hover:underline text-white  sm:text-[16px] text-[13px] py-[5px]">Browse by Languages</h1>
                            </div>
                        </div>
                        <h1 onClick={handleother} className="cursor-pointer hidden sm:block hover:text-[#cccccc]">Home</h1>
                        <h1 onClick={handletvshows} className="cursor-pointer hidden sm:block hover:text-[#cccccc]">TV Shows</h1>
                        <h1 onClick={handlemovies} className="cursor-pointer hidden sm:block hover:text-[#cccccc]">Movies</h1>
                        <h1 onClick={handleother} className="cursor-pointer hidden sm:block hover:text-[#cccccc]">New and Popular</h1>
                        <h1 onClick={handleother} className="cursor-pointer hidden sm:block hover:text-[#cccccc]">My List</h1>
                        <h1 onClick={handleother} className="cursor-pointer hidden sm:block hover:text-[#cccccc]">Browse by Languages</h1>
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
                <div className="">
                    <div className="relative">
                        {type && (
                            <div className="absolute flex items-center sm:top-[80px] top-[40px] sm:left-[50px] left-[20px] font-poppins font-bold sm:text-[30px] text-[13px] text-white my-[10px]">
                                <span>{type === 'movie' ? 'Movies' : 'TV Shows'}</span>
                                <select className="cursor-pointer sm:text-[14px] text-[10px] border-white border-[1px] text-white bg-black sm:ml-[50px] ml-[30px] pl-[5px] p-[2px] sm:w-[125px] w-[70px] hover:bg-transparent focus:bg-transparent">
                                    <option className="bg-black">Genre</option>
                                    <option className="bg-black" value="adventure">Adventure</option>
                                    <option className="bg-black" value="comedy">Comedy</option>
                                    <option className="bg-black" value="crime">Crime</option>
                                    <option className="bg-black" value="fantasy">Fantasy</option>
                                    <option className="bg-black" value="historical">Historical</option>
                                    <option className="bg-black" value="comedy">Comedy</option>
                                    <option className="bg-black" value="romance">Romance</option>
                                    <option className="bg-black" value="sci-fi">Sci-fi</option>
                                    <option className="bg-black" value="thriller">Thriller</option>
                                    <option className="bg-black" value="western">Western</option>
                                    <option className="bg-black" value="animation">Animation</option>
                                    <option className="bg-black" value="drama">Drama</option>
                                    <option className="bg-black" value="documentary">Documentary</option>
                                </select>
                            </div>
                        )}
                        <figure>
                            <img className="" src={movieImage} alt="error" />
                        </figure>
                        <div className="absolute sm:top-[40%] top-[40%] sm:left-[50px] left-[20px] sm:w-[35%] w-[50%] ">
                            <figure>
                                <img className="sm:w-[80%] w-[70%] " src={movieTitle} alt="error" />
                            </figure>
                            <div className="font-poppins font-bold text-white sm:text-[18px] text-[9px] sm:py-[20px] py-[8px] ">
                                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consequuntur</h1>
                            </div>
                            <div className="flex sm:gap-[20px] gap-[10px]">
                                <button className="flex font-poppins font-bold sm:text-[18px] text-[11px] bg-white hover:bg-[#ccc] sm:w-[125px] w-[70px] sm:h-[50px] h-[25px] items-center justify-center rounded-md "> <FaPlay className="sm:text-[23px] text-[12px] sm:mr-[10px] mr-[5px] " /> <span>Play</span> </button>
                                <button className="flex font-poppins font-bold text-white sm:text-[18px] text-[11px] bg-[rgba(109,109,110,0.7)] hover:bg-[rgba(109,109,110,0.4)] sm:w-[175px] w-[90px] sm:h-[50px] h-[25px] items-center justify-center rounded-md "> <BiInfoCircle className="text-white sm:text-[35px] text-[15px] sm:mr-[10px] mr-[5px] " /> <span>More Info</span> </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-black">
                    <h1 className="font-poppins font-bold text-[23px] text-white px-[50px] pt-[50px] pb-[20px] ">Continue to watch</h1>
                    <div className="flex w-[100%] relative">
                        <button onClick={()=>scroll('left')} className={` ${slidenumber===0?'hidden':''} bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)] h-[100%] absolute z-10 left-0 top-0 bottom-0 m-auto `}><BiSolidLeftArrow className="text-white text-[50px] "  /></button>                        
                        <div className="flex gap-[5px] ml-[50px] transition duration-500 ease-in-out" ref={listref}>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                        </div>
                        <button  onClick={()=>scroll('right')} className={` ${slidenumber===4?'hidden':''} bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)] h-[100%] absolute z-10 right-0 top-0 bottom-0 m-auto`}><BiSolidRightArrow className="text-white text-[50px]"  /></button>
                    </div>
                </div>
                <div className="bg-black">
                    <h1 className="font-poppins font-bold text-[23px] text-white px-[50px] pt-[50px] pb-[20px] ">Continue to watch</h1>
                    <div className="flex w-[100%] relative">
                        <button onClick={()=>scroll('left')} className={` ${slidenumber===0?'hidden':''} bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)] h-[100%] absolute z-10 left-0 top-0 bottom-0 m-auto `}><BiSolidLeftArrow className="text-white text-[50px] "  /></button>                        
                        <div className="flex gap-[5px] ml-[50px] transition duration-500 ease-in-out" ref={listref}>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                        </div>
                        <button  onClick={()=>scroll('right')} className={` ${slidenumber===4?'hidden':''} bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)] h-[100%] absolute z-10 right-0 top-0 bottom-0 m-auto`}><BiSolidRightArrow className="text-white text-[50px]"  /></button>
                    </div>
                </div>
                <div className="bg-black">
                    <h1 className="font-poppins font-bold text-[23px] text-white px-[50px] pt-[50px] pb-[20px] ">Continue to watch</h1>
                    <div className="flex w-[100%] relative">
                        <button onClick={()=>scroll('left')} className={` ${slidenumber===0?'hidden':''} bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)] h-[100%] absolute z-10 left-0 top-0 bottom-0 m-auto `}><BiSolidLeftArrow className="text-white text-[50px] "  /></button>                        
                        <div className="flex gap-[5px] ml-[50px] transition duration-500 ease-in-out" ref={listref}>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                            <div className="w-[225px] h-[120px] rounded-md bg-white"></div>
                        </div>
                        <button  onClick={()=>scroll('right')} className={` ${slidenumber===4?'hidden':''} bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)] h-[100%] absolute z-10 right-0 top-0 bottom-0 m-auto`}><BiSolidRightArrow className="text-white text-[50px]"  /></button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;