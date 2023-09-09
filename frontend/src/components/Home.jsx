import React, { useState } from "react";
import exampleImage from '../images/5977590.png';
import Image1 from '../images/tv.png'
import Video1 from '../images/video-tv-in-0819.m4v'
import Image21 from '../images/mobile-0819.jpg'
import Image22 from '../images/boxshot.png'
import Video2 from '../images/download-icon.gif'
import Image3 from '../images/device-pile-in.png'
import Video3 from '../images/video-devices-in.m4v'
import Image4 from '../images/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png'

const Home = () => {

    const [language, setlanguage] = useState('english')

    const changedropdown = (e) => {
        setlanguage(e.target.value)
    }

    return (
        <div>
            <section className="w-[100%] h-[90vh] bg-[url('images/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-center bg-cover">
                <div className="w-[100%] h-[90vh] bg-[rgba(0,0,0,0.6)]">
                    <header className="max-w-[1170px] mx-auto ">
                        <div className="grid sm:grid-cols-2 grid-cols-[30%_auto] px-[10px] items-center">
                            <figure>
                                <img src={exampleImage} className="w-[180px] " alt="error" />
                            </figure>
                            <div className="flex justify-end gap-[20px]">
                                <div className="relative">
                                    <svg className="absolute text-white top-[9px] left-[7px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-width="2" d="M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,23 C15,23 16,18 16,12 C16,6 15,1 12,1 C9,1 8,6 8,12 C8,18 9,23 12,23 Z M2,16 L22,16 M2,8 L22,8"></path></svg>
                                    <select name="" id="" value={language} onChange={changedropdown} className="bg-black text-white border-[1px] border-[rgb(90,90,90)] rounded-[5px] sm:p-[4px_25px] p-[3px_20px]  font-poppins font-bold ">
                                        <option className="bg-white " value="english">English</option>
                                        <option className="bg-white " value="hindi">Hindi</option>
                                    </select>
                                </div>
                                <button className="font-poppins font-bold bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out rounded-[5px] text-white px-[15px]">
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </header>
                    <div className="max-w-[1170px] mx-auto sm:py-[150px] py-[50px] text-center text-white ">
                        <h1 className="sm:text-[50px] text-[35px] font-extrabold ">Laughter. Tears. Thrills. Find it all on Netflix.</h1>
                        <h4 className="sm:text-[25px] text-[18px] m-[20px] ">Endless entertainment starts at just ₹ 149. Cancel anytime.</h4>
                        <p className="sm:text-[21px] text-[15px] m-[20px] ">Ready to watch? Enter your email to create or restart your membership.   </p>
                        <div className="max-w-[600px] sm:px-[10px] px-[40px] mx-auto mt-[30px] ">
                            <form action="" className="grid sm:grid-cols-[70%_auto] grid-cols-1 gap-[10px] ">
                                <input className="border-[1px] pl-[20px] h-[50px] border-[#ccc] bg-[rgba(0,0,0,0.5)] rounded-md " type="email" placeholder="Email address" />
                                <button className="font-poppins font-bold bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out rounded-[5px] text-white px-[15px] text-xl h-12 w-40 ml-[60px] sm:ml-[0px]">Get Started > </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-[100%] bg-black border-t-[#3e3e3e] border-t-[8px] sm:py-[70px] py-[50px]">
                <div className="max-w-[1170px] mx-auto px-[10px] ">
                    <div className="grid sm:grid-cols-2 grid-cols-1 text-center sm:text-left items-center">
                        <div className="text-white">
                            <h2 className="sm:text-[50px] text-[33px] font-bold ">Enjoy on your TV</h2>
                            <p className="sm:text-[25px] text-[19px] pt-[20px] ml-3 mr-3 sm:ml-0 sm:mr-0 ">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                        </div>
                        <figure className="relative">
                            <video className="absolute w-[80%] bottom-[20%] left-[10%] -z-1 ">
                                <source src={Video1} />
                            </video>
                            <img className="relative" src={Image1} alt="error" />
                        </figure>
                    </div>
                </div>
            </section>
            <section className="w-[100%] bg-black border-t-[#3e3e3e] border-t-[8px] sm:py-[70px] py-[50px]">
                <div className="max-w-[1170px] mx-auto px-[10px] ">
                    <div className="grid sm:grid-cols-2 grid-cols-1 text-center sm:text-left items-center">
                        <figure className="relative sm:order-1 order-2 ">
                            <img src={Image21} alt="" />
                            <div className="sm:w-[60%] w-[90%] absolute sm:left-[20%] left-[5%] border-[1px] border-[#ccc] bottom-[30px] grid grid-cols-[70%_auto] bg-black items-center rounded-[10px]">
                                <div className="grid grid-cols-[25%_auto] p-[10px] gap-[10px] items-center ">
                                    <img className="" src={Image22} alt="" /> 
                                    <div className="text-white">
                                        <h3 className="font-poppins font-extrabold text-[14px] ">Stranger Things</h3>
                                        <p className=" text-blue-700">Downloading...</p>
                                    </div>
                                </div>
                                <div>
                                    <img className="w-[50%] ml-[30px] sm:ml-[40px]" src={Video2} alt="" />
                                </div>
                            </div>
                        </figure>
                        <div className="text-white sm:order-2 order-1 ">
                            <h2 className="sm:text-[50px] text-[33px] font-bold sm:leading-[65px] leading-[40px]  ">Download your shows to watch offline</h2>
                            <p className="sm:text-[25px] text-[19px] pt-[20px] ml-3 mr-3 sm:ml-0 sm:mr-0 ">Save your favourites easily and always have something to watch.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-[100%] bg-black border-t-[#3e3e3e] border-t-[8px] sm:py-[70px] py-[50px]">
                <div className="max-w-[1170px] mx-auto px-[10px] ">
                    <div className="grid sm:grid-cols-2 grid-cols-1 text-center sm:text-left items-center">
                        <div className="text-white">
                            <h2 className="sm:text-[50px] text-[33px] font-bold ">Watch everywhere</h2>
                            <p className="sm:text-[25px] text-[19px] pt-[20px] ml-3 mr-3 sm:ml-0 sm:mr-0 ">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                        </div>
                        <figure className="relative">
                            <video className="absolute w-[61%] bottom-[46%] left-[19%] -z-1 ">
                                <source src={Video3} />
                            </video>
                            <img className="relative" src={Image3} alt="error" />
                        </figure>
                    </div>
                </div>
            </section>
            <section className="w-[100%] bg-black border-t-[#3e3e3e] border-t-[8px] sm:py-[70px] py-[50px]">
                <div className="max-w-[1170px] mx-auto px-[10px] ">
                    <div className="grid sm:grid-cols-2 grid-cols-1 text-center sm:text-left items-center">
                        <figure className="relative sm:order-1 order-2 ">
                            <img src={Image4} alt="" />
                        </figure>
                        <div className="text-white sm:order-2 order-1 ">
                            <h2 className="sm:text-[50px] text-[33px] font-bold sm:leading-[65px] leading-[40px]  ">Create profiles for kids</h2>
                            <p className="sm:text-[25px] text-[19px] pt-[20px] ml-3 mr-3 sm:ml-0 sm:mr-0 ">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;