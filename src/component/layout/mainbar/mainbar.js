
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { MyRouts } from '../../routes/routs';
import HomePage from './pages/home/homepage';
import MostHashtags from './pages/mostHashtag/MostHashtags';
import TwittesByUsers from './pages/twittesByUsers/TwittesByUsers';

const MainBar = () => {
    
    return (

        <div className='mainbar'>
            
            


            <Outlet />
        </div>
    )
    ;
};

export default MainBar;