import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Login from './login';
import Register from './Register';

const LoginRegister = () => {
    return (
        <div className='loginRegister-container'>
            <div className='loginRegister'>
                <div className='links'>
                    <NavLink to='login' 
                    style={
                        ({isActive})=>{
                            return {
                                    // backgroundColor : isActive ? "#5ea9dd" : "rgb(132 189 255 / 91%)",
                                    borderBottom : isActive ? "2px solid rgb(132 189 255 / 91%)" :"none"}
                        }
                        
                    }
                    className='buttonLinkStyle'>ورود</NavLink>
                    <NavLink to='register' 
                    style={
                        ({isActive})=>{
                            return {
                                    // backgroundColor : isActive ? "#5ea9dd" : "rgb(132 189 255 / 91%)",
                                    borderBottom : isActive ? "2px solid rgb(132 189 255 / 91%)" :"none"}
                        }
                        
                    }
                    className='buttonLinkStyle'>ثبت نام</NavLink>

                </div>
                <div className='mainBox'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;