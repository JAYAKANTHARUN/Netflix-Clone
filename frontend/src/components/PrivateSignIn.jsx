import React from "react";
import { Navigate,Outlet } from 'react-router-dom';

const PrivateSignIn=()=>{
    const user=localStorage.getItem('user');
    return user?<Outlet />:<Navigate to='/signin' />
}

export default PrivateSignIn;