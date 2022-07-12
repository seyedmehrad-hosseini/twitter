import React,{useEffect, useRef, useState} from 'react';
import Header from '../../../../header/Header';
import TwittesList from '../twitteslist/TwittesList';
import { FaHome } from "react-icons/fa";
import NewTweete from './component/NewTweete';
import { getAllTweets } from '../../../../../api/api_tweet';
import { Outlet } from 'react-router-dom';
const HomePage = () => {
    const [tweets ,settweets] = useState([])
        useEffect(()=>{
            getAllTweets( (isOk , dataOrError) =>{
                if(isOk){
                    settweets(dataOrError)
                }else{
                    alert('data not found error')
                }
            })

               }
     , [])


    return (<>
        <div className='homePage'>
            <Header name={"خانه"} icon={<FaHome/>} />
            <NewTweete />
            <div className='twittes'>
                {
                    tweets.map(item => {
                        
                        if(item.text !=''){
                            return<TwittesList {...item}/>
                        }
                        
                    })
                }
            </div>
        </div>
        
    </>

    );
};

export default HomePage;