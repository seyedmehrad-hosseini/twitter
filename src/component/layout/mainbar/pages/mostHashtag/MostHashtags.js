import React from 'react';
import { FaSlackHash } from "react-icons/fa";
import bestUsersData from '../../../../data';
import Header from '../../../../header/Header';
import TwittesList from '../twitteslist/TwittesList';
const MostHashtags = () => {
    return (
        <div className='mostHashtagPage'>
            <Header name={"بیشترین هشتگ ها"} icon={<FaSlackHash/>} />

            <div className='twittes'>
                {
                    bestUsersData.map(item => <TwittesList {...item}/>)
                }
            </div>
        </div>
    );
};

export default MostHashtags;