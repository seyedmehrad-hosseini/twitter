
import React from 'react';
import HomePage from './pages/home/homepage';
import MostHashtags from './pages/mostHashtag/MostHashtags';
import TwittesByUsers from './pages/twittesByUsers/TwittesByUsers';

const MainBar = () => {
    return (
        <div className='mainbar'>

            {/* <HomePage  /> */}
            {/* <MostHashtags /> */}
            <TwittesByUsers />

        </div>
    );
};

export default MainBar;