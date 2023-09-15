import React, { useState } from "react";
import exampleImage from '../images/5977590.png';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Step12 = () => {

    const location = useLocation();
    const [language, setlanguage] = useState('english')
    const [focused, setfocused] = useState(false)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [subscription,setsubscription] = useState('no')

    useEffect(() => {
        const paramemail = new URLSearchParams(location.search).get('email')
        setemail(paramemail)
    }, [location.search])


    const changedropdown = (e) => {
        setlanguage(e.target.value)
    }

    const navigate = useNavigate()

    const handlestep12 = async() => {
        let result = await fetch('http://127.0.0.1:4000/register', {
            method: 'post',
            body: JSON.stringify({ email, password , subscription }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        if (result.result.email && result.auth) {
            localStorage.setItem("user", JSON.stringify(result.result))
            localStorage.setItem("token", JSON.stringify(result.auth))
            navigate('/step21') //navigate(`/step21?email=${result.user.email}&password=${result.user.password}`);
        }
        else {
            alert(result.result)
        }
    }

    const handlefocus = () => {
        if (password === '') {
            setfocused(!focused)
        }
    }
    const handleblur = () => {

        if (password === '') {
            setfocused(!focused)
            setpassword('')
        }

    }
    const handlepassword = (e) => {
        setpassword(e.target.value);
    }

    const handlenetflix = () => {
        navigate('/')
    }

    return (
        <div>
            <section className="w-[100%] sm:h-[80vh] h-[100vh] bg-center bg-cover">
                <header className=" mx-auto border-b-[1px] boreder-[#e6e6e6] ">
                    <div className="flex justify-between px-[10px] items-center sm:-mt-[10px] sm:-mb-[10px]">
                        <figure className="sm:px-[20px]">
                            <img onClick={handlenetflix} src={exampleImage} className="sm:w-[200px] w-[90px] cursor-pointer " alt="error" />
                        </figure>
                        <div className="sm:text-[18px] text-[15px] sm:px-[20px]">
                            <a href="/signin" className="font-poppins cursor-pointer font-extrabold text-black sm:px-[15px] hover:underline"> Sign In</a>
                        </div>
                    </div>
                </header>
                <div className="max-w-[500px] mx-auto ">
                    <div className="flex flex-col my-[40px] mx-[20px]">
                        <p className="text-black font-poppins text-[13px]">STEP <span className="font-bold">1</span> OF <span className="font-bold">3</span> </p>
                        <h1 className="text-3xl font-poppins font-extrabold mt-[10px]">Welcome back!</h1>
                        <h1 className="text-3xl font-poppins font-extrabold mb-[10px]">Joining Netflix is easy.</h1>
                        <p className="font-poppins text-[17px] mt-[5px] mb-[30px]">Enter your password and you'll be watching in no time.</p>
                        <h2 className="font-poppins text-[16px]">Email</h2>
                        <label className="font-poppins font-bold text-[16px]">{email}</label>
                        <div className="relative sm:max-w-[460px] max-w-[460px]  ">
                            <input onChange={handlepassword} value={password} onFocus={handlefocus} onBlur={handleblur} className="w-full border-[1px] border-black px-[15px] py-[30px] rounded-sm h-[50px] text-[16px] my-[20px]" type="password" />
                            <label className={`text-[#8c8c8c] absolute sm:left-[16px] left-[16px] pointer-events-none transition-all ease-in-out duration-300 ${focused ? "sm:top-[22px] text-[12px] top-[22px]" : "sm:top-[40px] text-[16px] top-[40px]"}`} onClick={handlefocus}>Enter your password</label>
                        </div>
                        <p className="cursor-pointer hover:underline text-blue-600">Forgot your password?</p>
                        <button onClick={handlestep12} className=" font-poppins font-bol bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out rounded-[5px] text-white px-[15px] text-2xl h-16 my-[20px] ">Next</button>
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

export default Step12;