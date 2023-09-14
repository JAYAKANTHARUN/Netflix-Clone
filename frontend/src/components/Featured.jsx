import React from 'react'
import movieImage from '../images/movieimage.webp'
import movieTitle from '../images/movietitle.webp'
import { FaPlay } from 'react-icons/fa';
import { BiInfoCircle } from 'react-icons/bi';

const Featured = ({ type }) => {

    return (
        <div>
            <div className="relative">
                {type && (
                    <div className="absolute flex items-center sm:top-[80px] top-[40px] sm:left-[50px] left-[20px] font-poppins font-bold sm:text-[30px] text-[13px] text-white my-[10px]">
                        <span>{type === 'movies' ? 'Movies' : 'TV Shows'}</span>
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
                    <img className="w-full " src={movieImage} alt="error" />
                    {/* <div className="absolute bottom-0 left-0 w-full h-1/10 bg-gradient-to-t from-transparent via-transparent to-black" /> */}
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
    )
}

export default Featured