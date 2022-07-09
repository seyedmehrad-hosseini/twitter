import React,{useEffect, useRef, useState} from 'react';
import { FaFileImage } from "react-icons/fa";
import Header from '../../../../header/Header';
import TwittesList from '../twitteslist/TwittesList';
import { FaHome } from "react-icons/fa";
import axios from 'axios';
const HomePage = () => {
    const [inputTwitte, setInputTwitte] = useState('');
    const [bestUsersData ,setBestUsersData] = useState([])
        useEffect(()=>{
               axios.get(" http://localhost:3000/bestUsersData")
               .then(response=>{
                    const data = response.data
                    setBestUsersData(data)
                    


               }).catch(error=>{
                console.log(error)

               })

               }
     , [])


    return (
        <div className='homePage'>
            <Header name={"خانه"} icon={<FaHome/>} />
            <div className="do-tweet">
                <img src='img/userMehrad.jpg'/>
                <textarea contentEditable 
                    onChange={(e)=> setInputTwitte(e.target.value)}
                    value={inputTwitte}
                    placeholder="توییت کن..."  
                    className='twitte-input' placeholder='توییت کن ...'>
                   

                </textarea>
                <div className='twitte-improtImg'>
                    <div className='importImg'>
                        <FaFileImage />
                    </div>
                    <button>
                            توییت
                    </button>
                </div>
            </div>
            <div className='twittes'>
                {
                    bestUsersData.map(item => {

                        if(item.twittes !=''){
                            return<TwittesList {...item}/>
                        }
                    
                })
                }
            </div>
        </div>
    );
};

export default HomePage;