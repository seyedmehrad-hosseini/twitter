import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import bestUsersData from '../../../../data';
import Header from '../../../../header/Header';
import TwittesList from '../twitteslist/TwittesList';
const TwittesByUsers = () => {
    return (
        <div className='twittesByUsers'>
            <Header name={"سیدمهراد حسینی"} icon={<FaUserAlt/>} />

            <div className='twittes'>
                {
                    bestUsersData.map(item => <TwittesList {...item}/>)
                }
            </div>
        </div>
    );
};

export default TwittesByUsers;