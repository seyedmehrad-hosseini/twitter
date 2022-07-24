import React,{useEffect, useRef, useState} from 'react';
import Header from '../../../../header/Header';
import TwittesList from '../twitteslist/TwittesList';
import { FaHome } from "react-icons/fa";
import NewTweete from './component/NewTweete';
import { getAllTweets } from '../../../../../api/api_tweet';
import { Outlet } from 'react-router-dom';
import { useGetAlltwitte } from '../../../../../context/allTwitteContext';
const HomePage = () => {

    const {getAllTweets_example,tweets} = useGetAlltwitte()
    console.log(tweets)

        useEffect(()=>{
            getAllTweets_example()

               }
     , [])


    return (<>
        <div className='homePage'>
            <Header name={"خانه"} icon={<FaHome/>} />
            <NewTweete  />
            <div className='twittes'>
                {
                    tweets.map(item => {
                        
                        // if(item.text !=''){
                            return<TwittesList {...item}/>
                        // }
                        
                    })
                }
            </div>
        </div>
        
    </>

    );
};

export default HomePage;