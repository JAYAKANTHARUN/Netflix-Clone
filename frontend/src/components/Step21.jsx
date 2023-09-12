import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import exampleImage from '../images/5977590.png';
import checkImage from '../images/Checkmark.png';

const Step21 = () => {

    const navigate = useNavigate()

    const [language, setlanguage] = useState('english')

    const changedropdown = (e) => {
        setlanguage(e.target.value)
    }
    const handlenetflix = () => {
        navigate('/')
    }
    const handlestep21 = () => {
        navigate('/step22')
    }

    return (
        <div>
            <section className="w-[100%] sm:h-[85vh] h-[100vh] bg-center bg-cover">
                <header className=" mx-auto border-b-[1px] border-[#e6e6e6] ">
                    <div className="flex justify-between px-[10px] items-center sm:-mt-[10px] sm:-mb-[10px]">
                        <figure className="sm:px-[20px]">
                            <img onClick={handlenetflix} src={exampleImage} className="sm:w-[200px] w-[90px] cursor-pointer " alt="error" />
                        </figure>
                        <div className="sm:text-[18px] text-[15px] sm:px-[20px]">
                            <a href="/signout" className="font-poppins font-extrabold text-black sm:px-[15px] hover:underline"> Sign Out</a>
                        </div>
                    </div>
                </header>
                <div className="max-w-[450px] mx-auto ">
                    <div className="flex flex-col items-center text-center my-[115px] mx-[10px]">
                        <img src={checkImage} className="w-[12%] mb-[20px]" alt="error" />
                        <p className="text-black font-poppins text-[13px]">STEP <span className="font-bold">2</span> OF <span className="font-bold">3</span> </p>
                        <h1 className="sm:text-3xl text-[25px] font-poppins font-bold my-[5px] mb-[20px]">Choose your plan.</h1>
                        <div className="flex-col max-w-[325px]">
                            <div className="flex -mb-[10px]">
                                <div className="text-red-600 mt-[10px] mx-[10px]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon default-ltr-cache-0 e1mhci4z1" data-name="Checkmark" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                                </div>
                                <div className="text-left">
                                    <p className="font-poppins my-[10px] sm:text-[18px] text-[16px]">No commitments, cancel anytime.</p>
                                </div>
                            </div>
                            <div className="flex -mb-[10px]">
                                <div className="text-red-600 mt-[10px] mx-[10px]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon default-ltr-cache-0 e1mhci4z1" data-name="Checkmark" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                                </div>
                                <div className="text-left">
                                    <p className="font-poppins my-[10px] sm:text-[18px] text-[16px] ">Everything on Netflix for one low price.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="text-red-600 mt-[10px] mx-[10px]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon default-ltr-cache-0 e1mhci4z1" data-name="Checkmark" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                                </div>
                                <div className="text-left">
                                    <p className="font-poppins my-[10px] sm:text-[18px] text-[16px]">No ads and no extra fees. Ever.</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={handlestep21} className=" w-[80%] font-poppins font-bol bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out rounded-[5px] text-white px-[15px] text-2xl h-16 my-[30px] ">Next</button>
                    </div>
                </div>
            </section>
            <section className="w-[100%] bg-center bg-cover bg-[#F3F3F3]">
                <div className="mt-[70px] sm:mt-[100px]  py-[22px] sm:border-0 font-medium text-[#737373] max-w-[1170px] sm:max-w-[1600px]  mx-auto sm:px-[450px] px-[10px] sm:pl-[80px] pl-[15px] h-auto sm:pt-[20px]">
                    <h3 className="font-poppins sm:text-[16px] mt-[20px]">Questions? Call <span className="cursor-pointer hover:underline">000-800-919-1694</span></h3>
                    <div className="text-[13px] font-poppins py-[20px] grid sm:grid-cols-4 sm:grid-rows-2 grid-cols-2">
                        <p className="sm:my-2 my-1 hover:underline cursor-pointer">FAQ</p>
                        <p className="sm:my-2 my-1 hover:underline cursor-pointer">Help Centre</p>
                        <p className="sm:my-2 my-1 hover:underline cursor-pointer">Netflix Shop</p>
                        <p className="sm:my-2 my-1 hover:underline cursor-pointer">Terms of Use</p>
                        <p className="sm:my-2 my-1 hover:underline cursor-pointer">Privacy</p>
                        <p className="sm:my-2 my-1 hover:underline cursor-pointer">Cookie Preferences</p>
                        <p className="sm:my-2 my-1 hover:underline cursor-pointer">Corporate Information</p>
                    </div>
                    <div className="relative">
                        <svg className="absolute text-[#737373] top-[9px] left-[7px]" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-width="2" d="M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,23 C15,23 16,18 16,12 C16,6 15,1 12,1 C9,1 8,6 8,12 C8,18 9,23 12,23 Z M2,16 L22,16 M2,8 L22,8"></path></svg>
                        <select name="" id="" value={language} onChange={changedropdown} className="bg-white text-[#737373] border-[1px] border-[rgb(90,90,90)] rounded-sm sm:p-[4px_25px] p-[3px_20px]  font-poppins font-bold ">
                            <option className="bg-white " value="english">English</option>
                            <option className="bg-white " value="hindi">Hindi</option>
                        </select>
                    </div>
                    <br />
                    <p className="text-red-600 pb-[10px]">Clone by JayakanthArun</p>
                </div>
            </section>
        </div>
    )
}

export default Step21;