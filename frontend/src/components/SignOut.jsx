import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import exampleImage from '../images/5977590.png';

const SignOut = () => {
    const [language, setlanguage] = useState('english')

    const navigate = useNavigate()

    const handlegonow = () => {
        navigate('/')
    }
    const changedropdown = (e) => {
        setlanguage(e.target.value)
    }

    const handlesignin = () => {
        navigate('/signin')
    }
    const handlenetflix = () => {
        navigate('/')
    }

    // useEffect(()=>{
    //     const auth = localStorage.getItem('user')
    //     if (auth && auth.subscription==='yes') {
    //         navigate('/home')
    //     }
    //     else if (auth && auth.subscription==='no'){
    //         navigate('/step21')
    //     }
    //     setTimeout(() => {
    //         navigate('/')
    //       },30000);
    // })

    return (
        <div>
            <section className="w-[100%] sm:h-[110vh] sm:bg-[url('images/login-the-crown_2-1500x1000.jpg')] sm:bg-cover bg-white  ">
                <div className="w-[100%] sm:h-[110vh] h-[120vh]">
                <header className="max-w-[1450px] mx-auto ">
                        <div className="flex justify-between px-[10px] pt-[5px] items-center">
                            <figure>
                                <img onClick={handlenetflix} src={exampleImage} className="w-[130px] cursor-pointer " alt="error" />
                            </figure>
                            <div>
                                <button onClick={handlesignin} className="font-poppins font-bold bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out rounded-[3px] text-white sm:px-[20px] sm:py-[5px] px-[13px] py-[2px] ">
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </header>
                    <div className=" bg-white sm:w-[450px] w-[100%] h-[43vh] mx-auto sm:max-w-[600px] max-w-[320px] mt-[50px] ">
                        <div className="sm:py-[40px] py-[20px] sm:px-[40px] px-[0px] flex flex-col ">
                            <h1 className="font-poppins font-extrabold text-3xl text-black py-[5px] float-left">Leaving So Soon?    </h1><br />
                            <h1 className="font-poppins text-[15px] mb-[10px] ">Just so you know, you don’t always need to sign out of Netflix. It’s only necessary if you’re on a shared or public computer.</h1>
                            <h1 className="font-poppins text-[15px] my-[5px]">You’ll be redirected to Netflix.com in 30 seconds.</h1>
                            <button onClick={handlegonow} className="font-poppins font-bold bg-blue-600 hover:bg-blue-500 transition duration-300 ease-in-out rounded-[2px] text-white px-[15px] text-[18px] h-[50px] mt-[20px] sm:mb-[10px] ">
                                Go Now
                            </button>
                        </div>
                    </div>
                    <div className="mt-[150px] sm:mt-[90px]  sm:py-[22px] py-[10px] sm:bg-[rgba(0,0,0,0.7)] bg-white border-t-[1px] sm:border-0  text-[#737373] max-w-[1170px] sm:max-w-[1600px]  mx-auto sm:px-[250px] px-[10px] sm:pl-[250px] pl-[15px] h-auto sm:pt-[20px]">
                        <h3 className="font-poppins sm:text-[16px] mt-[20px]">Questions? Call <span className="cursor-pointer hover:underline">000-800-919-1694</span></h3>
                        <div className="text-[13px] font-poppins sm:py-[30px] py-[20px] grid sm:grid-cols-4 sm:grid-rows-2 grid-cols-2">
                            <p className="sm:my-2 my-1 hover:underline cursor-pointer">FAQ</p>
                            <p className="sm:my-2 my-1 hover:underline cursor-pointer">Help Centre</p>
                            <p className="sm:my-2 my-1 hover:underline cursor-pointer">Terms of Use</p>
                            <p className="sm:my-2 my-1 hover:underline cursor-pointer">Privacy</p>
                            <p className="sm:my-2 my-1 hover:underline cursor-pointer">Cookie Preferences</p>
                            <p className="sm:my-2 my-1 hover:underline cursor-pointer">Corporate Information</p>
                        </div>
                        <div className="relative">
                            <svg className="absolute text-[#737373] top-[9px] left-[7px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-width="2" d="M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,23 C15,23 16,18 16,12 C16,6 15,1 12,1 C9,1 8,6 8,12 C8,18 9,23 12,23 Z M2,16 L22,16 M2,8 L22,8"></path></svg>
                            <select name="" id="" value={language} onChange={changedropdown} className="sm:bg-black bg-white sm:text-[#737373] border-[1px] text-[#737373] border-[rgb(90,90,90)] rounded-[3px] sm:p-[4px_25px] p-[3px_20px]  font-poppins font-bold ">
                                <option className="bg-white " value="english">English</option>
                                <option className="bg-white " value="hindi">Hindi</option>
                            </select>
                        </div>
                        <br />
                        <p className="text-red-600 pb-[10px]">Clone by JayakanthArun</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignOut;