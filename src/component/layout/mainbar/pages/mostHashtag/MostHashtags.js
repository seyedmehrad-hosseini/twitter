import React from 'react';
import { FaFileImage } from "react-icons/fa";
import bestUsersData from '../../../../data';
import Header from '../../../../header/Header';
import TwittesList from '../twitteslist/TwittesList';
const HomePage = () => {
    return (
        <div className='homePage'>
            <Header />

            <div className='twittes'>
                {
                    bestUsersData.map(item => <TwittesList {...item}/>)
                }
            </div>
        </div>
    );
};

export default HomePage;