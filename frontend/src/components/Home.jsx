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
    const [visible1,setvisible1] = useState(false)
    const [visible2,setvisible2] = useState(false)
    const [visible3,setvisible3] = useState(false)
    const [visible4,setvisible4] = useState(false)
    const [visible5,setvisible5] = useState(false)
    const [visible6,setvisible6] = useState(false)

    const changedropdown = (e) => {
        setlanguage(e.target.value)
    }

    const handleplus1 = () => {
        setvisible1(!visible1)
        setvisible2(false)
        setvisible4(false)
        setvisible5(false)
        setvisible3(false)
        setvisible6(false)
    }
    const handleplus2 = () => {
        setvisible2(!visible2)
        setvisible1(false)
        setvisible4(false)
        setvisible5(false)
        setvisible3(false)
        setvisible6(false)
    }
    const handleplus3 = () => {
        setvisible3(!visible3)
        setvisible2(false)
        setvisible4(false)
        setvisible5(false)
        setvisible1(false)
        setvisible6(false)
    }
    const handleplus4 = () => {
        setvisible4(!visible4)
        setvisible2(false)
        setvisible1(false)
        setvisible5(false)
        setvisible3(false)
        setvisible6(false)
    }
    const handleplus5 = () => {
        setvisible5(!visible5)
        setvisible2(false)
        setvisible4(false)
        setvisible1(false)
        setvisible3(false)
        setvisible6(false)
    }
    const handleplus6 = () => {
        setvisible6(!visible6)
        setvisible2(false)
        setvisible4(false)
        setvisible5(false)
        setvisible3(false)
        setvisible1(false)
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
            <section className="w-[100%] bg-black border-t-[#3e3e3e] border-t-[8px] sm:py-[70px] py-[50px]">
                <div className="max-w-[1170px] mx-auto px-[15px] ">
                    <h2 className="sm:text-[50px] text-[30px] font-bold text-white text-center">Frequently Asked Questions</h2>
                    <div className="py-[30px]  ">
                        <div className="bg-[#2d2d2d] mb-[10px]">
                            <div className="p-[20px] text-white sm:text-[25px] text-[17px] font-poppins font-bold relative border-b-2 border-b-black hover:bg-[rgb(78,78,78)]  transition duration-300 ease-in-out cursor-pointer"  onClick={handleplus1}>
                                <h3>What is Netflix?</h3><span className="absolute right-[30px] top-[20px]">{visible1 ? 'x' : '+'}</span>
                            </div>

                            <div className={`text-white sm:text-[20px] text-[15px] font-poppins overflow-hidden transition-all duration-500 ease-in-out ${visible1 ? 'scale-100 h-auto p-[20px] origin-top' : 'scale-y-0 h-[0px] origin-top'}`}>
                                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p><br />
                                <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                            </div>
                        </div>
                        <div className="bg-[#2d2d2d] mb-[10px]">
                            <div className="p-[20px] text-white sm:text-[25px] text-[17px] font-poppins font-bold relative border-b-2 border-b-black hover:bg-[rgb(78,78,78)]  transition duration-300 ease-in-out cursor-pointer"  onClick={handleplus2}>
                                <h3>How much does Netflix cost?</h3><span className="absolute right-[30px] top-[20px]">{visible2 ? 'x' : '+'}</span>
                            </div>

                            <div className={`text-white sm:text-[20px] text-[15px] font-poppins overflow-hidden transition-all duration-500 ease-in-out ${visible2 ? 'scale-100 h-auto p-[20px] origin-top' : 'scale-y-0 h-[0px] origin-top'}`}>
                                <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
                            </div>
                        </div>
                        <div className="bg-[#2d2d2d] mb-[10px]">
                            <div className="p-[20px] text-white sm:text-[25px] text-[17px] font-poppins font-bold relative border-b-2 border-b-black hover:bg-[rgb(78,78,78)]  transition duration-300 ease-in-out cursor-pointer"  onClick={handleplus3}>
                                <h3>Where can I watch?</h3><span className="absolute right-[30px] top-[20px]">{visible3 ? 'x' : '+'}</span>
                            </div>

                            <div className={`text-white sm:text-[20px] text-[15px] font-poppins overflow-hidden transition-all duration-500 ease-in-out ${visible3 ? 'scale-100 h-auto p-[20px] origin-top' : 'scale-y-0 h-[0px] origin-top'}`}>
                                <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p><br />
                                <p>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                            </div>
                        </div>
                        <div className="bg-[#2d2d2d] mb-[10px]">
                            <div className="p-[20px] text-white sm:text-[25px] text-[17px] font-poppins font-bold relative border-b-2 border-b-black hover:bg-[rgb(78,78,78)]  transition duration-300 ease-in-out cursor-pointer"  onClick={handleplus4}>
                                <h3>How do I cancel?</h3><span className="absolute right-[30px] top-[20px]">{visible4 ? 'x' : '+'}</span>
                            </div>

                            <div className={`text-white sm:text-[20px] text-[15px] font-poppins overflow-hidden transition-all duration-500 ease-in-out ${visible4 ? 'scale-100 h-auto p-[20px] origin-top' : 'scale-y-0 h-[0px] origin-top'}`}>
                                <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                            </div>
                        </div>
                        <div className="bg-[#2d2d2d] mb-[10px]">
                            <div className="p-[20px] text-white sm:text-[25px] text-[17px] font-poppins font-bold relative border-b-2 border-b-black hover:bg-[rgb(78,78,78)]  transition duration-300 ease-in-out cursor-pointer"  onClick={handleplus5}>
                                <h3>What can I watch on Netflix?</h3><span className="absolute right-[30px] top-[20px]">{visible5 ? 'x' : '+'}</span>
                            </div>

                            <div className={`text-white sm:text-[20px] text-[15px] font-poppins overflow-hidden transition-all duration-500 ease-in-out ${visible5 ? 'scale-100 h-auto p-[20px] origin-top' : 'scale-y-0 h-[0px] origin-top'}`}>
                                <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                            </div>
                        </div>
                        <div className="bg-[#2d2d2d] mb-[10px]">
                            <div className="p-[20px] text-white sm:text-[25px] text-[17px] font-poppins font-bold relative border-b-2 border-b-black hover:bg-[rgb(78,78,78)]  transition duration-300 ease-in-out cursor-pointer" onClick={handleplus6}>
                                <h3>Is Netflix good for kids?</h3><span className="absolute right-[30px] top-[20px]">{visible6 ? 'x' : '+'}</span>
                            </div>

                            <div className={`text-white sm:text-[20px] text-[15px] font-poppins overflow-hidden transition-all duration-500 ease-in-out ${visible6 ? 'scale-100 h-auto p-[20px] origin-top' : 'scale-y-0 h-[0px] origin-top'}`}>
                                <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p><br />
                                <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;