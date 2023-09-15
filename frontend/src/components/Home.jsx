import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Featured from "./Featured";
import Nav from "./Nav";
import List from "./List";

const Home = () => {

    const navigate = useNavigate()

    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem('user'))
        const subscription=user.subscription
        if (subscription==='yes'){
            navigate('/home')
        }
        else{
            navigate('/step21')
        }
    })
    return (
        <div className="">
            <section className="max-w-[1170] mx-auto w-[100%] overflow-hidden " >
                <Nav />
                <Featured />
                <List />
                <List />
                <List />
                <List />
                <List />
            </section>
        </div>
    )
}

export default Home;