import axios from 'axios';
import React, { useState , useRef, useContext } from 'react';
import { FaFileImage } from "react-icons/fa";
import { addNewTweet } from '../../../../../../api/api_tweet';
import { useReTwitte } from '../../../../../../context/retwitteContext';
import { useSetProfile } from '../../../../../../context/setProfileContext';
const NewTweete = ({getAllTweets}) => {
    const {newTwitteInput,setnewTwitteInput} = useReTwitte()
    const {ImagePath} = useSetProfile()

    const [twitteImgPath, settwitteImgPath] = useState('');
    const [ImageFile, setImageFile] = useState();

    const inputRef = useRef()
    const getImage =()=>{
        if(ImagePath){
            return ImagePath
        }

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
            onChange={(e)=> setnewTwitteInput(e.target.value)}
            value={newTwitteInput}
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
                        formData.append("text",newTwitteInput)

                        if(twitteImgPath != ''){
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
                setnewTwitteInput('')
                settwitteImgPath('')

            }}>
                    توییت
            </button>
        </div>

    </div>
    );
};

export default NewTweete;