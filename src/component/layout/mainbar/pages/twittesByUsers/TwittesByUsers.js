import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import bestUsersData from '../../../../data';
import Header from '../../../../header/Header';
import TwittesList from '../twitteslist/TwittesList';
const TwittesByUsers = () => {
    const {username} =useParams()
    console.log(useParams())
    return (
        <div className='twittesByUsers'>
            <Header name={username} icon={<FaUserAlt/>} />

            <div className='twittes'>
                {
                    bestUsersData.map(item =>
                        {

                            if(item.twittes !=''){
                                return<TwittesList {...item}/>
                            }
                        
                    })
                }
            </div>
        </div>
    );
};

export default TwittesByUsers;