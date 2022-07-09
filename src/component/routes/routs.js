import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../layout/mainbar/pages/home/homepage';
import MostHashtags from '../layout/mainbar/pages/mostHashtag/MostHashtags';
import TwittesByUsers from '../layout/mainbar/pages/twittesByUsers/TwittesByUsers';

const MyRouts = () => {
    return (
        <Routes>
                    
            <Route path='/' element={<HomePage />} />
            <Route path='home' element={<HomePage />} />
            
            <Route path='most-hashtags'>
                <Route path=":hashtagName" element={<MostHashtags />} />    
            </Route>
            <Route path='twittes-by-users' element={<TwittesByUsers />} />
            <Route path='twittes-by-users'>
                <Route path=":username" element={<TwittesByUsers />} />    
            </Route>
            {/* <Route element={<P404 />} /> */}





        </Routes>
    );
};

export default MyRouts;