import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import App from '../app';
import HomePage from '../layout/mainbar/pages/home/homepage';
import LoginRegister from '../layout/mainbar/pages/loginRegister/LoginRegister';
import MostHashtags from '../layout/mainbar/pages/mostHashtag/MostHashtags';
import TwittesByUsers from '../layout/mainbar/pages/twittesByUsers/TwittesByUsers';

export const IndexRoutes = () => {
    return(
       <Routes>
            <Route path="login" element={<LoginRegister/>}>
            </Route>
            <Route path='/' element={<App/>}>

            </Route>
       </Routes>

    )
};

export const MyRouts = () => {
    return (
<>
</>
    );
};

