import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import exampleImage from '../images/5977590.png';

const Step22 = () => {

    const navigate = useNavigate()

    const [language, setlanguage] = useState('english')
    const [selectedOption, setSelectedOption] = useState('');
    const [selected1, setselected1] = useState(true)
    const [selected2, setselected2] = useState(false)
    const [selected3, setselected3] = useState(false)
    const [selected4, setselected4] = useState(false)


    const handleOptions = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);
        setselected1(selectedValue === 'mobile');
        setselected2(selectedValue === 'basic');
        setselected3(selectedValue === 'standard');
        setselected4(selectedValue === 'premium');
    };

    const changedropdown = (e) => {
        setlanguage(e.target.value)
    }
    const handlenetflix = () => {
        navigate('/')
    }
    const handlestep22 = () => {
        navigate('/step3')
    }

    return (
        <div>
            <section className="w-[100%] sm:h-[150vh] h-[190vh] bg-center bg-cover">
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
                <div className="max-w-[950px] mx-auto ">
                    <div className="flex flex-col my-[30px] mx-[10px]">
                        <p className="text-black font-poppins text-[13px]">STEP <span className="font-bold">2</span> OF <span className="font-bold">3</span> </p>
                        <h1 className="sm:text-3xl text-2xl font-poppins font-extrabold my-[10px]">Choose the plan that’s right for you</h1>
                        <div className="flex-col max-w-[400px] mb-[15px]">
                            <div className="flex -mb-[15px]">
                                <div className="text-red-600 mt-[10px] mx-[10px]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon default-ltr-cache-0 e1mhci4z1" data-name="Checkmark" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                                </div>
                                <div className="text-left">
                                    <p className="font-poppins my-[10px] sm:text-[17px] text-[16px]">Watch all you want. Ad-free.</p>
                                </div>
                            </div>
                            <div className="flex -mb-[15px]">
                                <div className="text-red-600 mt-[10px] mx-[10px]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon default-ltr-cache-0 e1mhci4z1" data-name="Checkmark" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                                </div>
                                <div className="text-left">
                                    <p className="font-poppins my-[10px] sm:text-[17px] text-[16px] ">Recommendations just for you.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="text-red-600 mt-[10px] mx-[10px]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon default-ltr-cache-0 e1mhci4z1" data-name="Checkmark" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path></svg>
                                </div>
                                <div className="text-left">
                                    <p className="font-poppins my-[10px] sm:text-[17px] text-[16px]">Change or cancel your plan anytime.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex mb-[5px] justify-end items-center">
                                <label className={`relative sm:m-[15px] m-[2px] text-center sm:w-[120px] sm:h-[120px] w-full h-[70px] cursor-pointer rounded-sm ${selected1 ? 'bg-red-600 shadow-black shadow-md' : 'bg-red-400 '} transition duration-300 ease-in-out `}>
                                    <input
                                        onChange={handleOptions} className="absolute top-0 left-0 opacity-0 w-[100%] h-[100%] cursor-pointer" type="radio" name="subscription" value="mobile" />
                                    <span className="absolute sm:top-[50px] sm:left-[37px] top-[26px] left-[19px] text-white font-poppins font-bold sm:text-[16px] text-[12px] ">Mobile</span>
                                </label>
                                <label className={`relative sm:m-[15px] m-[2px] text-center sm:w-[120px] sm:h-[120px] w-full h-[70px]  cursor-pointer rounded-sm ${selected2 ? 'bg-red-600 shadow-black shadow-md' : 'bg-red-400 '} transition duration-300 ease-in-out`}>
                                    <input
                                        onChange={handleOptions} className="absolute top-0 left-0 opacity-0 w-[100%] h-[100%] cursor-pointer" type="radio" name="subscription" value="basic" />
                                    <span className="absolute sm:top-[50px] sm:left-[40px] top-[26px] left-[23px] text-white font-poppins font-bold sm:text-[16px] text-[12px] ">Basic</span>
                                </label>
                                <label className={`relative sm:m-[15px] m-[2px] text-center sm:w-[120px] sm:h-[120px] w-full h-[70px]  cursor-pointer rounded-sm ${selected3 ? 'bg-red-600 shadow-black shadow-md' : 'bg-red-400 '} transition duration-300 ease-in-out`}>
                                    <input
                                        onChange={handleOptions} className="absolute top-0 left-0 opacity-0 w-[100%] h-[100%] cursor-pointer" type="radio" name="subscription" value="standard" />
                                    <span className="absolute sm:top-[50px] sm:left-[25px] top-[26px] left-[10px] text-white font-poppins font-bold sm:text-[16px] text-[12px] ">Standard</span>
                                </label>
                                <label className={`relative sm:m-[15px] m-[2px] text-center sm:w-[120px] sm:h-[120px] w-full h-[70px]  cursor-pointer rounded-sm ${selected4 ? 'bg-red-600 shadow-black shadow-md' : 'bg-red-400 '} transition duration-300 ease-in-out`}>
                                    <input
                                        onChange={handleOptions} className="absolute top-0 left-0 opacity-0 w-[100%] h-[100%] cursor-pointer" type="radio" name="subscription" value="premium" />
                                    <span className="absolute sm:top-[50px] sm:left-[27px] top-[26px] left-[11px] text-white font-poppins font-bold sm:text-[16px] text-[12px] ">Premium</span>
                                </label>
                            </div>
                            <div>
                                <table className="sm:max-w-[950px] sm:text-[17px] text-[13px] font-poppins font-bold sm:mt-[0px] mt-[10px]">
                                    <tbody>
                                        <tr className="sm:hidden">
                                            <td colSpan={5} className="text-center py-[10px] text-[#737373] ">
                                                Monthly price
                                            </td>
                                        </tr>
                                        <tr className="border-b-[2px] border-[#ccc] ">
                                            <td className="sm:block hidden sm:w-[330px] pl-[10px] py-[15px] text-[#737373]">Monthly price</td>
                                            <td className={`sm:w-[150px] min-w-[70px] w-[150px] text-center ${selected1 ? 'text-red-600' : 'text-[#737373]'}`}>₹149</td>
                                            <td className={`sm:w-[150px] min-w-[70px] w-[150px] text-center ${selected2 ? 'text-red-600' : 'text-[#737373]'}`}>₹199</td>
                                            <td className={`sm:w-[150px] min-w-[70px] w-[150px] text-center ${selected3 ? 'text-red-600' : 'text-[#737373]'}`}>₹499</td>
                                            <td className={`sm:w-[150px] min-w-[70px] w-[150px] text-center ${selected4 ? 'text-red-600' : 'text-[#737373]'}`}>₹649</td>
                                        </tr>
                                        <tr className="sm:hidden">
                                            <td colSpan={5} className="text-center py-[10px] text-[#737373] ">
                                            Video quality
                                            </td>
                                        </tr>
                                        <tr className="border-b-[2px] border-[#ccc] ">
                                            <td className="sm:block hidden sm:w-[330px] pl-[10px] py-[15px] text-[#737373]">Video quality</td>
                                            <td className={`sm:w-[150px] text-center ${selected1 ? 'text-red-600' : 'text-[#737373]'}`}>Good</td>
                                            <td className={`sm:w-[150px] text-center ${selected2 ? 'text-red-600' : 'text-[#737373]'}`}>Good</td>
                                            <td className={`sm:w-[150px] text-center ${selected3 ? 'text-red-600' : 'text-[#737373]'}`}>Better</td>
                                            <td className={`sm:w-[150px] text-center ${selected4 ? 'text-red-600' : 'text-[#737373]'}`}>Best</td>
                                        </tr>
                                        <tr className="sm:hidden">
                                            <td colSpan={5} className="text-center py-[10px] text-[#737373] ">
                                            Resolution
                                            </td>
                                        </tr>
                                        <tr className="border-b-[2px] border-[#ccc] ">
                                            <td className="sm:block hidden sm:w-[330px] pl-[10px] py-[15px] text-[#737373]">Resolution</td>
                                            <td className={`sm:w-[150px] text-center ${selected1 ? 'text-red-600' : 'text-[#737373]'}`}>480p</td>
                                            <td className={`sm:w-[150px] text-center ${selected2 ? 'text-red-600' : 'text-[#737373]'}`}>720p</td>
                                            <td className={`sm:w-[150px] text-center ${selected3 ? 'text-red-600' : 'text-[#737373]'}`}>1080p</td>
                                            <td className={`sm:w-[150px] text-center ${selected4 ? 'text-red-600' : 'text-[#737373]'}`}>4K+HDR</td>
                                        </tr>
                                        <tr className="sm:hidden">
                                            <td colSpan={5} className="text-center pt-[10px] text-[#737373] ">
                                            Devices you can use to watch
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="sm:table-cell hidden sm:w-[330px] pl-[10px] py-[15px] align-top text-[#737373]">Devices you can use to watch</td>
                                            <td className="sm:w-[150px] text-center flex flex-col justify-start items-center">
                                                <div className="mt-[15px] my-[5px]">
                                                    <div className={`flex justify-center ${selected1 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon default-ltr-cache-0 e1mhci4z1" data-name="Phone" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <div className={`${selected1 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <p className="text-[13px] mt-[2px]">Phone</p>
                                                    </div>
                                                </div>
                                                <div className="my-[5px]">
                                                    <div className={`flex justify-center ${selected1 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon default-ltr-cache-0 e1mhci4z1" data-name="Tablet" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <div className={`${selected1 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <p className="text-[13px] mt-[2px]">Tablet</p>
                                                    </div>

                                                </div>
                                            </td>
                                            <td className="sm:w-[150px] text-center">
                                                <div className="mt-[15px] my-[5px]">
                                                    <div className={`flex justify-center ${selected2 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon default-ltr-cache-0 e1mhci4z1" data-name="Phone" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <div className={`${selected2 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <p className="text-[13px] mt-[2px]">Phone</p>
                                                    </div>
                                                </div>
                                                <div className="my-[10px]">
                                                    <div className={`flex justify-center ${selected2 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon default-ltr-cache-0 e1mhci4z1" data-name="Tablet" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <div className={`${selected2 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <p className="text-[13px] mt-[2px]">Tablet</p>
                                                    </div>
                                                </div>
                                                <div className="my-[10px]">
                                                    <div className={`flex justify-center ${selected2 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon default-ltr-cache-0 e1mhci4z1" data-name="Laptop" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.0001 6.49964L5.00003 15.2485C4.32836 15.2967 3.66158 15.3517 3.00003 15.4134L3.00011 5.64259C3.00011 5.15287 3.35477 4.7352 3.83802 4.65582C6.44383 4.22777 9.17979 4 12.0001 4C14.8204 4 17.5564 4.22777 20.1622 4.65582C20.6455 4.7352 21.0001 5.15288 21.0001 5.6426L21 15.4134C20.3385 15.3517 19.6717 15.2967 19 15.2485L19.0001 6.49964C16.7553 6.17311 14.4115 6 12.0001 6C9.58874 6 7.24495 6.17311 5.0001 6.49964ZM1.11859 19.6355C4.58689 19.2212 8.23466 19 12 19C15.7653 19 19.413 19.2212 22.8813 19.6355L23.1186 17.6497C19.5701 17.2257 15.8431 17 12 17C8.15686 17 4.42984 17.2257 0.881348 17.6497L1.11859 19.6355Z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <div className={`${selected2 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <p className="text-[13px]">Computer</p>
                                                    </div>
                                                </div>
                                                <div className="my-[10px]">
                                                    <div className={`flex justify-center ${selected2 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon default-ltr-cache-0 e1mhci4z1" data-name="Tv" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C0.895431 3 0 3.89543 0 5V16C0 17.1046 0.895431 18 2 18H22C23.1046 18 24 17.1046 24 16V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V16H2V5ZM6.06305 21.1859C8.00211 21.0634 9.98427 21 12 21C14.0157 21 15.9979 21.0634 17.937 21.1859L18.063 19.1899C16.0818 19.0647 14.0576 19 12 19C9.94241 19 7.9182 19.0647 5.93695 19.1899L6.06305 21.1859Z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <div className={`${selected2 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <p className="text-[13px] mt-[2px]">TV</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="sm:w-[150px] text-center">
                                                <div className="mt-[15px] my-[5px]">
                                                    <div className={`flex justify-center ${selected3 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon default-ltr-cache-0 e1mhci4z1" data-name="Phone" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <div className={`${selected3 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <p className="text-[13px] mt-[2px]">Phone</p>
                                                    </div>
                                                </div>
                                                <div className="my-[10px]">
                                                    <div className={`flex justify-center ${selected3 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon default-ltr-cache-0 e1mhci4z1" data-name="Tablet" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <div className={`${selected3 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <p className="text-[13px] mt-[2px]">Tablet</p>
                                                    </div>
                                                </div>
                                                <div className="my-[10px]">
                                                    <div className={`flex justify-center ${selected3 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon default-ltr-cache-0 e1mhci4z1" data-name="Laptop" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.0001 6.49964L5.00003 15.2485C4.32836 15.2967 3.66158 15.3517 3.00003 15.4134L3.00011 5.64259C3.00011 5.15287 3.35477 4.7352 3.83802 4.65582C6.44383 4.22777 9.17979 4 12.0001 4C14.8204 4 17.5564 4.22777 20.1622 4.65582C20.6455 4.7352 21.0001 5.15288 21.0001 5.6426L21 15.4134C20.3385 15.3517 19.6717 15.2967 19 15.2485L19.0001 6.49964C16.7553 6.17311 14.4115 6 12.0001 6C9.58874 6 7.24495 6.17311 5.0001 6.49964ZM1.11859 19.6355C4.58689 19.2212 8.23466 19 12 19C15.7653 19 19.413 19.2212 22.8813 19.6355L23.1186 17.6497C19.5701 17.2257 15.8431 17 12 17C8.15686 17 4.42984 17.2257 0.881348 17.6497L1.11859 19.6355Z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <div className={`${selected3 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <p className="text-[13px]">Computer</p>
                                                    </div>
                                                </div>
                                                <div className="my-[10px]">
                                                    <div className={`flex justify-center ${selected3 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon default-ltr-cache-0 e1mhci4z1" data-name="Tv" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C0.895431 3 0 3.89543 0 5V16C0 17.1046 0.895431 18 2 18H22C23.1046 18 24 17.1046 24 16V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V16H2V5ZM6.06305 21.1859C8.00211 21.0634 9.98427 21 12 21C14.0157 21 15.9979 21.0634 17.937 21.1859L18.063 19.1899C16.0818 19.0647 14.0576 19 12 19C9.94241 19 7.9182 19.0647 5.93695 19.1899L6.06305 21.1859Z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <div className={`${selected3 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <p className="text-[13px] mt-[2px]">TV</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="sm:w-[150px] text-center">
                                                <div className="mt-[15px] my-[5px]">
                                                    <div className={`flex justify-center ${selected4 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon default-ltr-cache-0 e1mhci4z1" data-name="Phone" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <div className={`${selected4 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <p className="text-[13px] mt-[2px]">Phone</p>
                                                    </div>
                                                </div>
                                                <div className="my-[10px]">
                                                    <div className={`flex justify-center ${selected4 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon default-ltr-cache-0 e1mhci4z1" data-name="Tablet" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <div className={`${selected4 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <p className="text-[13px] mt-[2px]">Tablet</p>
                                                    </div>
                                                </div>
                                                <div className="my-[10px]">
                                                    <div className={`flex justify-center ${selected4 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon default-ltr-cache-0 e1mhci4z1" data-name="Laptop" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.0001 6.49964L5.00003 15.2485C4.32836 15.2967 3.66158 15.3517 3.00003 15.4134L3.00011 5.64259C3.00011 5.15287 3.35477 4.7352 3.83802 4.65582C6.44383 4.22777 9.17979 4 12.0001 4C14.8204 4 17.5564 4.22777 20.1622 4.65582C20.6455 4.7352 21.0001 5.15288 21.0001 5.6426L21 15.4134C20.3385 15.3517 19.6717 15.2967 19 15.2485L19.0001 6.49964C16.7553 6.17311 14.4115 6 12.0001 6C9.58874 6 7.24495 6.17311 5.0001 6.49964ZM1.11859 19.6355C4.58689 19.2212 8.23466 19 12 19C15.7653 19 19.413 19.2212 22.8813 19.6355L23.1186 17.6497C19.5701 17.2257 15.8431 17 12 17C8.15686 17 4.42984 17.2257 0.881348 17.6497L1.11859 19.6355Z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <div className={`${selected4 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <p className="text-[13px]">Computer</p>
                                                    </div>
                                                </div>
                                                <div className="my-[10px]">
                                                    <div className={`flex justify-center ${selected4 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="planGrid__supportedDevicesIcon default-ltr-cache-0 e1mhci4z1" data-name="Tv" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C0.895431 3 0 3.89543 0 5V16C0 17.1046 0.895431 18 2 18H22C23.1046 18 24 17.1046 24 16V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V16H2V5ZM6.06305 21.1859C8.00211 21.0634 9.98427 21 12 21C14.0157 21 15.9979 21.0634 17.937 21.1859L18.063 19.1899C16.0818 19.0647 14.0576 19 12 19C9.94241 19 7.9182 19.0647 5.93695 19.1899L6.06305 21.1859Z" fill="currentColor"></path></svg>
                                                    </div>
                                                    <div className={`${selected4 ? 'text-red-600' : 'text-[#737373]'}`}>
                                                        <p className="text-[13px] mt-[2px]">TV</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="my-[15px] sm:text-[13px] text-[12px] font-poppins font-semibold text-[#737373] ">
                                    <p className="mb-[10px]">HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <span className="text-blue-600 cursor-pointer hover:underline">Terms of Use</span> for more details.</p>
                                    <p>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button onClick={handlestep22} className=" font-poppins font-bol bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out rounded-[5px] text-white px-[15px] text-2xl h-16 my-[20px] sm:w-[450px] w-full ">Next</button>
                        </div>
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

export default Step22;