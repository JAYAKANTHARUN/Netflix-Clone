import React from "react";
import { Navigate,Outlet } from 'react-router-dom';

const PrivateSignOut=()=>{
    const user=localStorage.getItem('user');
    return (user==null)?<Outlet />:<Navigate to='/home' />
}

export default PrivateSignOut;