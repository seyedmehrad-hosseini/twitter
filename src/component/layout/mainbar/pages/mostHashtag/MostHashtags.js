import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaSlackHash } from "react-icons/fa";
import { Outlet, useParams } from 'react-router-dom';
import { getAllTweets } from '../../../../../api/api_tweet';
import { useGetAlltwitte } from '../../../../../context/allTwitteContext';
// import bestUsersData from '../../../../data';
import Header from '../../../../header/Header';
import TwittesList from '../twitteslist/TwittesList';
const MostHashtags = () => {
    const {hashtagName} = useParams()
    // const [tweets ,settweets] = useState([])
    const {getAllTweets_example,tweets} = useGetAlltwitte()

    const body ={
        hashTag :hashtagName
}
        useEffect(()=>{
            
            getAllTweets_example(body)
        }
     , [])
    return (
        <div className='mostHashtagPage'>
            <Header name={hashtagName} icon={<FaSlackHash/>} />

            <div className='twittes'>
                {/* <Outlet /> */}
                
                 {
                    tweets.map(item => {

                        if(item.text !='' && item.text.indexOf(`${hashtagName}`) != -1){
                            
                            return<TwittesList {...item}/>
                        }

                }
                        )
                } 
                
            </div>
        </div>
    );
};

export default MostHashtags;