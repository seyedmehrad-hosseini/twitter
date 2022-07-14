import axios from 'axios';
import React, { useState } from 'react';
import { FaFileImage } from "react-icons/fa";
import { addNewTweet } from '../../../../../../api/api_tweet';
const NewTweete = ({getAllTweets}) => {
    const [inputTwitte, setInputTwitte] = useState('');
    
    
    return (
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
            <button onClick={() =>{
                addNewTweet(inputTwitte , (isOk, message)=>{
                    if(isOk){
                        getAllTweets()
                        alert(message)
                    }else{
                        alert(message)
                    }

                })
                setInputTwitte('')
            }}>
                    توییت
            </button>
        </div>
    </div>
    );
};

export default NewTweete;