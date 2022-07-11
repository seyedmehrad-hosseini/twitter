import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { getAllTweets } from '../../../../../api/api_tweet';
import Header from '../../../../header/Header';
import TwittesList from '../twitteslist/TwittesList';
const TwittesByUsers = () => {
    const {username} =useParams()
    const [tweets ,settweets] = useState([])
    useEffect(()=>{
            getAllTweets((isOk , dataOrError) =>{
                if(isOk){
                    settweets(dataOrError)
                }else{
                    alert('data not found')
                }
            })

           }
 , [])
    return (
        <div className='twittesByUsers'>
            <Header name={username} icon={<FaUserAlt/>} />

            <div className='twittes'>
                {
                    tweets.map(item =>
                        {

                            if(item.text !=''){
                                return<TwittesList {...item}/>
                            }
                        
                    })
                }
            </div>
        </div>
    );
};

export default TwittesByUsers;