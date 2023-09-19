import React, { useEffect, useState } from 'react'
import movieImage from '../images/movieimage.webp'
import movieTitle from '../images/movietitle.webp'
import { FaPlay } from 'react-icons/fa';
import { BiInfoCircle } from 'react-icons/bi'; 

const Featured = ({ type }) => {

    const [movie, setmovie] = useState('')
    const [movietitle, setmovietitle] = useState('')

    const getmovie = async () => {
        let url = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        url = await url.json()
        const randomIndex = Math.floor(Math.random() * 20) + 1;
        const selectedmovie = url.results[randomIndex]

        let title = await fetch(`https://api.themoviedb.org/3/movie/${selectedmovie.id}/images`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        title = await title.json()
        const selectedtitle = title.logos[0].file_path

        setmovie(selectedmovie)
        setmovietitle(selectedtitle)
    }

    useEffect(() => {
        const fetchdata = async () => {
            await getmovie()
        }
        
        fetchdata()

    }, [])  

    return (
        <div>
            <div className="relative">
                {type && (
                    <div className="absolute flex items-center sm:top-[80px] top-[35px] sm:left-[50px] left-[20px] font-poppins font-bold sm:text-[30px] text-[13px] text-white my-[10px]">
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
                <figure className='relative'>
                    <img className="w-full" src={movie ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : ''} alt="error" />
                    <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-t from-black to-transparent" />
                </figure>
                <div className="absolute sm:top-[35%] top-[30%] sm:left-[50px] left-[20px] sm:w-[70%] w-[80%] ">
                    <figure>
                        <img className="sm:h-[20vh] w-auto h-[8vh] " src={movie ? `https://image.tmdb.org/t/p/original${movietitle}` : { movieTitle }} alt="error" />
                    </figure>
                    <div className="font-poppins font-bold text-white sm:text-[18px] text-[6px] sm:py-[20px] py-[2px] ">
                        <h1 className='text-shadow-md'>{movie ? movie.overview : ''}</h1>
                    </div>
                    <div className="flex sm:gap-[20px] gap-[5px]">
                        <button className="flex font-poppins font-bold sm:text-[18px] text-[8px] bg-white hover:bg-[#ccc] sm:w-[125px] w-[50px] sm:h-[50px] h-[20px] items-center justify-center rounded-md "> <FaPlay className="sm:text-[23px] text-[12px] sm:mr-[10px] mr-[5px] " /> <span>Play</span> </button>
                        <button className="flex font-poppins font-bold text-white sm:text-[18px] text-[8px] bg-[rgba(109,109,110,0.7)] hover:bg-[rgba(109,109,110,0.4)] sm:w-[175px] w-[70px] sm:h-[50px] h-[20px] items-center justify-center rounded-md "> <BiInfoCircle className="text-white sm:text-[35px] text-[15px] sm:mr-[10px] mr-[5px] " /> <span>More Info</span> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured