import React, { useState, useEffect, useRef } from 'react'
import movieposter from '../images/movieposter.jpg'
import { FaPlay } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import movietrailer from '../images/movietrailer.mp4'
import movietrailer1 from '../images/movietrailer1.mp4'

import YouTube from 'react-youtube';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ index, type }) => {
    const navigate = useNavigate()

    const isMobile = window.innerWidth <= 640

    const [ishovered, setishovered] = useState(false)

    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        timeoutRef.current = setTimeout(() => {
            if (timeoutRef.current) {
                setishovered(true);
            }
        }, 500);
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setishovered(false);
    };

    const [movie, setmovie] = useState('')
    const [movievideo, setmovievideo] = useState('')
    const [voteavg, setvoteavg] = useState(0)
    const [duration, setduration] = useState(0)
    const [genres, setgenres] = useState([])

    const gettrending = async () => {
        let url = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        url = await url.json()
        const selectedmovie = url.results[index]
        const selectedvoteavg = url.results[index].vote_average

        let video = await fetch(`https://api.themoviedb.org/3/movie/${selectedmovie.id}/videos?language=en-US`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        video = await video.json()
        const selectedvideo = video.results[0].key

        let details = await fetch(`https://api.themoviedb.org/3/movie/${selectedmovie.id}?language=en-US`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        details = await details.json()
        const selectedduration = details.runtime
        const selectedgenres = details.genres

        setmovie(selectedmovie)
        setmovievideo(selectedvideo)
        setvoteavg(selectedvoteavg)
        setduration(selectedduration)
        setgenres(selectedgenres)
    }
    const getpopular = async () => {
        let url = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        url = await url.json()
        const selectedmovie = url.results[index]
        const selectedvoteavg = url.results[index].vote_average

        let video = await fetch(`https://api.themoviedb.org/3/movie/${selectedmovie.id}/videos?language=en-US`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        video = await video.json()
        const selectedvideo = video.results[0].key

        let details = await fetch(`https://api.themoviedb.org/3/movie/${selectedmovie.id}?language=en-US`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        details = await details.json()
        const selectedduration = details.runtime
        const selectedgenres = details.genres

        setmovie(selectedmovie)
        setmovievideo(selectedvideo)
        setvoteavg(selectedvoteavg)
        setduration(selectedduration)
        setgenres(selectedgenres)
    }
    const gettoprated = async () => {
        let url = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        url = await url.json()
        const selectedmovie = url.results[index]
        const selectedvoteavg = url.results[index].vote_average

        let video = await fetch(`https://api.themoviedb.org/3/movie/${selectedmovie.id}/videos?language=en-US`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        video = await video.json()
        const selectedvideo = video.results[0].key

        let details = await fetch(`https://api.themoviedb.org/3/movie/${selectedmovie.id}?language=en-US`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        details = await details.json()
        const selectedduration = details.runtime
        const selectedgenres = details.genres

        setmovie(selectedmovie)
        setmovievideo(selectedvideo)
        setvoteavg(selectedvoteavg)
        setduration(selectedduration)
        setgenres(selectedgenres)
    }
    const getnowplaying = async () => {
        let url = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        url = await url.json()
        const selectedmovie = url.results[index]
        const selectedvoteavg = url.results[index].vote_average

        let video = await fetch(`https://api.themoviedb.org/3/movie/${selectedmovie.id}/videos?language=en-US`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        video = await video.json()
        const selectedvideo = video.results[0].key

        let details = await fetch(`https://api.themoviedb.org/3/movie/${selectedmovie.id}?language=en-US`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        details = await details.json()
        const selectedduration = details.runtime
        const selectedgenres = details.genres

        setmovie(selectedmovie)
        setmovievideo(selectedvideo)
        setvoteavg(selectedvoteavg)
        setduration(selectedduration)
        setgenres(selectedgenres)
    }
    const getupcoming = async () => {
        let url = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        url = await url.json()
        const selectedmovie = url.results[index]
        const selectedvoteavg = url.results[index].vote_average

        let video = await fetch(`https://api.themoviedb.org/3/movie/${selectedmovie.id}/videos?language=en-US`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        video = await video.json()
        const selectedvideo = video.results[0].key

        let details = await fetch(`https://api.themoviedb.org/3/movie/${selectedmovie.id}?language=en-US`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        details = await details.json()
        const selectedduration = details.runtime
        const selectedgenres = details.genres

        setmovie(selectedmovie)
        setmovievideo(selectedvideo)
        setvoteavg(selectedvoteavg)
        setduration(selectedduration)
        setgenres(selectedgenres)
    }

    const handleplay = () => {
        navigate(`/watch?key=${movievideo}`)
    }

    useEffect(() => {

        const fetchDataBasedOnType = async (type) => {
            if (type === 'Trending') {
                await gettrending();
            } else if (type === 'Now Playing') {
                await getnowplaying()
            } else if (type === 'Popular') {
                await getpopular();
            } else if (type === 'Top Rated') {
                await gettoprated();
            } else if (type === 'Upcoming') {
                await getupcoming();
            }
        };

        fetchDataBasedOnType(type);

    }, [])

    const opts = {
        height: '185',
        width: '330',
        playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            showInfo: 0,
        },
    };

    return (
        <div style={{ left: ishovered && index * 225 - 50 + index * 2.5 + 50 }} className={`${ishovered && !isMobile
            ? ` w-[325px] h-[325px] absolute -top-[110px] shadow-[#393939] shadow-lg`
            : ''
            } w-[225px] h-[125px] rounded-md bg-[rgb(18,18,18)] overflow-hidden cursor-pointer text-white`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <img className='w-[100%] object-cover ' src={movie ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : movieposter} alt="error" />
            {ishovered && !isMobile && (
                <>
                    {movie ? (
                        <div className='w-[100%] object-cover -mt-[183px]'>
                            <YouTube videoId={movievideo} opts={opts} />
                        </div>
                    ) : (
                        <video className='w-[100%] object-cover -mt-[183px]' autoPlay muted loop>
                            <source src={movietrailer1} />
                        </video>
                    )}
                    <div className='px-[20px] py-[10px] '>
                        <div className='flex justify-between items-center transition duration-3000 ease-in-out '>
                            <div className='flex gap-[15px] '>
                                <button onClick={handleplay} className=' text-black hover:bg-[#ccc] text-[20px] bg-white rounded-full w-[40px] h-[40px] transition duration-3000 ease-in-out'><FaPlay className='m-auto mr-[8px]' /></button>
                                <button className=' text-white text-[30px] bg-[rgb(37,37,37)] hover:bg-[rgb(60,60,60)] transition duration-3000 ease-in-out border-[#7c7c7c] hover:border-white border-[1px] rounded-full w-[40px] h-[40px]'><BiPlus className='m-auto' /></button>
                                <button className=' text-white text-[25px] bg-[rgb(37,37,37)] hover:bg-[rgb(60,60,60)] rounded-full w-[40px] h-[40px] transition duration-3000 ease-in-out border-[#7c7c7c] hover:border-white border-[1px]'><BiLike className='m-auto' /></button>
                                <button className=' text-white text-[25px] bg-[rgb(37,37,37)] hover:bg-[rgb(60,60,60)] rounded-full w-[40px] h-[40px] transition duration-3000 ease-in-out border-[#7c7c7c] hover:border-white border-[1px]'><BiDislike className='m-auto' /></button>
                            </div>
                            <div>
                                <button className=' text-white text-[20px] bg-[rgb(37,37,37)] hover:bg-[rgb(60,60,60)] rounded-full w-[40px] h-[40px] transition duration-3000 ease-in-out border-[#7c7c7c] hover:border-white border-[1px]'><BsChevronDown className='m-auto' /></button>
                            </div>
                        </div>
                        <div className='flex mt-[15px] mb-[5px] gap-[15px] items-center '>
                            <h1 className='text-green-600 font-poppins font-bold'>{movie ? Math.floor(voteavg * 10) : '96'}% match</h1>
                            <h1 className='font-poppins font-bold text-[#ccc] border-white border-[1px] p-[2px] '>+16</h1>
                            <h1 className='font-poppins font-bold text-[#ccc] '>{movie ? Math.floor(duration / 60) : '1'}h {movie ? duration % 60 : '40'}m</h1>
                        </div>
                        {movie ? (
                            <div className='flex gap-[5px] text-[14px] items-center text-white font-poppins font-bold mt-[10px] mb-[5px]'>
                                {genres.map((genre, index) => (
                                    <React.Fragment key={genre.id}>
                                        {genre.name}
                                        {index < genres.length - 1 && <GoDotFill className='text-[#ccc]' />}
                                    </React.Fragment>
                                ))}
                            </div>
                        ) : (
                            <div className='flex gap-[5px] text-[14px] items-center text-white font-poppins font-bold mt-[10px] mb-[5px]'>
                                Rousing <GoDotFill className='text-[#ccc]' /> Adventure <GoDotFill className='text-[#ccc]' /> Visual Striking
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default ListItem