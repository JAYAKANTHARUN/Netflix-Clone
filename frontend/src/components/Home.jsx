import React, { useState } from "react";
import exampleImage from '../images/5977590.png';

const Home = () => {

    const [language, setlanguage] = useState('english')

    const changedropdown = (e) => {
        setlanguage(e.target.value)
    }

    return (
        <section className="w-[100%] h-[90vh] bg-[url('images/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-center bg-cover">
            <div className="w-[100%] h-[90vh] bg-gradient-to-t from-black via-transparent to-black">
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
            </div>
        </section>
    )
}

export default Home;