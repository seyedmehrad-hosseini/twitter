import axios from 'axios';
import React, { useState , useRef, useContext } from 'react';
import { FaFileImage } from "react-icons/fa";
import { addNewTweet } from '../../../../../../api/api_tweet';
import { ReTwitte, useReTwitte } from '../../../../../../context/context';
const NewTweete = ({getAllTweets}) => {
    const {TextIsReceived,setTextIsReceived} = useReTwitte()

    const [twitteImgPath, settwitteImgPath] = useState('');
    const [ImageFile, setImageFile] = useState();

    const inputRef = useRef()
    const getImage =()=>{


         if (localStorage.getItem("image")){
            
            return localStorage.getItem("image")
        }else{
            return 'img/publicProfile.png'
        }
    }
    const handleFileSelected=(e)=>{
        
        console.log('holo1')
        {
            console.log('holo2')
            const reader = new FileReader()
            reader.onload=(e)=>{
                settwitteImgPath(e.target.result)
                
            }
            reader.readAsDataURL(e.target.files[0])
            setImageFile(e.target.files[0])

            

        }

       
    }
    
    return (
        <div className="do-tweet">
        <img className="profileUserNewTwitte" src={getImage()}/>
        <textarea 
            onChange={(e)=> setTextIsReceived(e.target.value)}
            value={TextIsReceived}
            placeholder="توییت کن..."  
            className='twitte-input' placeholder='توییت کن ...'>
           

        </textarea>
        {twitteImgPath 
        &&        
        <div className="twitteImg">
            <img src={twitteImgPath} />
        </div>
        }

        <div className='twitte-improtImg'>
            <div className='importImg'>
                <FaFileImage onClick={()=>inputRef.current.click()}/>
                <input ref={inputRef} type = "file" style={{display : "none"}} onChange={handleFileSelected}/>
            </div>
            <button onClick={() =>{
                        const formData = new FormData ; 
                        formData.append("text",TextIsReceived)

                        if(twitteImgPath == ''){
                        formData.append( "image",ImageFile)

                        }
                addNewTweet(formData , (isOk, message)=>{
                    if(isOk){
                        getAllTweets()
                        alert(message)
                    }else{
                        alert(message)
                    }

                })
                setTextIsReceived('')
                settwitteImgPath('')

            }}>
                    توییت
            </button>
        </div>

    </div>
    );
};

export default NewTweete;