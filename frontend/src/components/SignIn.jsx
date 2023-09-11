import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import exampleImage from '../images/5977590.png';

const SignIn = () => {
    const [language, setlanguage] = useState('english')
    const [focused, setfocused] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [focused2, setfocused2] = useState(false)
    const [inputValue2, setInputValue2] = useState('')

    const navigate = useNavigate()

    const signupnow = () => {
        navigate('/')
    }
    const changedropdown = (e) => {
        setlanguage(e.target.value)
    }

    const handlefocus = () => {
        if (inputValue === '') {
            setfocused(!focused)
        }
    }
    const handleblur = () => {

        if (inputValue === '') {
            setfocused(!focused)
            setInputValue('')
        }

    }
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    const handlefocus2 = () => {
        if (inputValue2 === '') {
            setfocused2(!focused2)
        }
    }
    const handleblur2 = () => {
        if (inputValue2 === '') {
            setfocused2(!focused2)
            setInputValue2('')
        }
    }
    const handleChange2 = (e) => {
        setInputValue2(e.target.value);
    }

    return (
        <div>
            <section className="w-[100%] sm:h-[146vh] sm:bg-[url('images/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg')] sm:bg-center sm:bg-cover bg-black h-[100%] ">
                <div className="w-[100%] sm:h-[146vh] h-[100%] bg-[rgba(0,0,0,0.6)]">
                    <header className="max-w-[1470px] mx-auto ">
                        <div className="px-[10px] items-center">
                            <figure>
                                <img src={exampleImage} className="sm:w-[200px] w-[100px] " alt="error" />
                            </figure>
                        </div>
                    </header>
                    <div className=" bg-[rgba(0,0,0,0.7)] sm:w-[450px] w-[100%] h-[80vh] mx-auto sm:max-w-[600px] max-w-[320px]">
                        <div className="sm:py-[50px] py-[20px] sm:px-[70px] px-[20px] flex flex-col ">
                            <h1 className="font-poppins font-extrabold text-3xl text-white py-[5px] float-left">Sign In</h1><br />
                            <div className="relative sm:max-w-[400px] max-w-[300px]  mx-auto mb-[20px]">
                                <input onChange={handleChange} value={inputValue} onFocus={handlefocus} onBlur={handleblur} className="focus:bg-[#4a4a4a] bg-[#333] text-[xl] px-[20px] h-[50px] rounded-md sm:w-[310px] w-[280px] mx-auto " type="text" /><br />
                                <label className={`text-[#8c8c8c] absolute sm:left-[20px] left-[20px] pointer-events-none transition-all ease-in-out duration-300 ${focused ? "sm:-top-[1px] text-[12px] -top-[1px]" : "sm:top-[13px] text-[16px] top-[14px]"}`} onClick={handlefocus}>Email or phone number</label>
                            </div>
                            <div className="relative sm:max-w-[400px] max-w-[300px] mx-auto mb-[10px]">
                                <input onChange={handleChange2} value={inputValue2} onFocus={handlefocus2} onBlur={handleblur2} className="focus:bg-[#4a4a4a] bg-[#333] text-[xl] px-[20px] mb-[10px] h-[50px] rounded-md sm:w-[310px] w-[280px] mx-auto" type="password" /><br />
                                <label className={`text-[#8c8c8c] absolute  sm:left-[20px] left-[20px] pointer-events-none transition-all ease-in-out duration-300 ${focused2 ? "sm:-top-[1px] text-[12px] -top-[1px]" : "sm:top-[13px] text-[16px] top-[14px]"}`} onClick={handlefocus2}>Password</label>
                            </div>

                            <button className="font-poppins font-bold bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out rounded-[5px] text-white px-[15px] text-[18px] h-[50px] mt-[20px] mb-[10px] ">
                                Sign In
                            </button>
                            <div className="flex justify-between">
                                <label className="text-[#b3b3b3] font-poppins text-[13px] my-[5px]">
                                    <input
                                        type="checkbox"
                                    />
                                    Remember me
                                </label>
                                <label className="text-[#b3b3b3] font-poppins text-[13px] my-[5px] cursor-pointer hover:underline ">Need help?</label>
                            </div>
                            <h1 className="text-[#737373] my-[16px] ">New to Netflix? <span onClick={signupnow} className="text-white cursor-pointer hover:underline">Sign up now.</span> </h1>
                            <h1 className="text-[#737373] text-[14px]">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-600 cursor-pointer hover:underline ">Learn more.</span> </h1>
                            <br />
                        </div>
                    </div>
                    <div className="mt-[70px] sm:mt-[100px]  py-[22px] bg-[rgba(0,0,0,0.7)] border-t-[1px] sm:border-0 border-[#737373] text-[#737373] max-w-[1170px] sm:max-w-[1600px]  mx-auto sm:px-[250px] px-[10px] sm:pl-[250px] pl-[15px] h-auto sm:pt-[20px]">
                        <h3 className="font-poppins sm:text-[16px] mt-[20px]">Questions? Call <span className="cursor-pointer hover:underline">000-800-919-1694</span></h3>
                        <div className="text-[13px] font-poppins py-[30px] grid sm:grid-cols-4 sm:grid-rows-2 grid-cols-2">
                            <p className="sm:my-2 my-1 hover:underline cursor-pointer">FAQ</p>
                            <p className="sm:my-2 my-1 hover:underline cursor-pointer">Help Centre</p>
                            <p className="sm:my-2 my-1 hover:underline cursor-pointer">Terms of Use</p>
                            <p className="sm:my-2 my-1 hover:underline cursor-pointer">Privacy</p>
                            <p className="sm:my-2 my-1 hover:underline cursor-pointer">Cookie Preferences</p>
                            <p className="sm:my-2 my-1 hover:underline cursor-pointer">Corporate Information</p>
                        </div>
                        <div className="relative">
                            <svg className="absolute text-[#737373] top-[9px] left-[7px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-width="2" d="M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,23 C15,23 16,18 16,12 C16,6 15,1 12,1 C9,1 8,6 8,12 C8,18 9,23 12,23 Z M2,16 L22,16 M2,8 L22,8"></path></svg>
                            <select name="" id="" value={language} onChange={changedropdown} className="bg-black text-[#737373] border-[1px] border-[rgb(90,90,90)] rounded-[5px] sm:p-[4px_25px] p-[3px_20px]  font-poppins font-bold ">
                                <option className="bg-white " value="english">English</option>
                                <option className="bg-white " value="hindi">Hindi</option>
                            </select>
                        </div>
                        <br />
                        <p className="text-red-600 pb-[10px]">Clone by JayakanthArun</p>
                    </div>
                </div>
            </section>
            {/* <section className="w-[100%] bg-[rgba(0,0,0,0.5)] border-t-[#3e3e3e] border-t-[8px] sm:py-[70px] py-[50px]">
                <div className="text-[rgba(255,255,255,0.7)] max-w-[1170px] mx-auto px-[10px] sm:ml-[180px] ml-[15px]">
                    <h3 className="font-poppins sm:text-[16px]">Questions? Call <span className="underline cursor-pointer">000-800-919-1694</span></h3>
                    <div className="text-[15px] font-poppins underline py-[30px] grid sm:grid-cols-3 sm:grid-rows-2 grid-cols-1">
                        <p className="sm:my-2 my-1 cursor-pointer">FAQ</p>
                        <p className="sm:my-2 my-1 cursor-pointer">Help Centre</p>
                        <p className="sm:my-2 my-1 cursor-pointer">Terms of Use</p>
                        <p className="sm:my-2 my-1 cursor-pointer">Privacy</p>
                        <p className="sm:my-2 my-1 cursor-pointer">Cookie Preferences</p>
                        <p className="sm:my-2 my-1 cursor-pointer">Corporate Information</p>
                    </div>
                    <div className="relative">
                        <svg className="absolute text-white top-[9px] left-[7px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-width="2" d="M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,23 C15,23 16,18 16,12 C16,6 15,1 12,1 C9,1 8,6 8,12 C8,18 9,23 12,23 Z M2,16 L22,16 M2,8 L22,8"></path></svg>
                        <select name="" id="" value={language} onChange={changedropdown} className="bg-black text-white border-[1px] border-[rgb(90,90,90)] rounded-[5px] sm:p-[4px_25px] p-[3px_20px]  font-poppins font-bold ">
                            <option className="bg-white " value="english">English</option>
                            <option className="bg-white " value="hindi">Hindi</option>
                        </select>
                    </div>
                    <br />
                    <p className="text-red-600">Clone by JayakanthArun</p>
                </div>
            </section> */}
        </div>
    )
}

export default SignIn;