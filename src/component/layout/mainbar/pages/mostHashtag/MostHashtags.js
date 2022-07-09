import React from 'react';
import { FaSlackHash } from "react-icons/fa";
import { Outlet, useParams } from 'react-router-dom';
import bestUsersData from '../../../../data';
import Header from '../../../../header/Header';
import TwittesList from '../twitteslist/TwittesList';
const MostHashtags = () => {
    const {hashtagName} = useParams()
    
    console.log(useParams())
    return (
        <div className='mostHashtagPage'>
            <Header name={hashtagName} icon={<FaSlackHash/>} />

            <div className='twittes'>
                {/* <Outlet /> */}
                
                 {
                    bestUsersData.map(item => {

                        if(item.twittes !='' && item.twittes[0].indexOf(`${hashtagName}`) != -1){
                            
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