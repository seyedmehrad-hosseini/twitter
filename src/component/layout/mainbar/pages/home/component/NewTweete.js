import axios from 'axios';
import React, { useState , useRef } from 'react';
import { FaFileImage } from "react-icons/fa";
import { addNewTweet } from '../../../../../../api/api_tweet';
const NewTweete = ({getAllTweets}) => {
    const [inputTwitte, setInputTwitte] = useState('');
    const [twitteImgPath, settwitteImgPath] = useState();
    const [FormDataTwitte, setFormDataTwitte] = useState('');
    const inputRef = useRef()
    const getImage =()=>{
        // if(ImagePath){
        //     return ImagePath
        // }

         if (localStorage.getItem("image")){
            
            return localStorage.getItem("image")
        }else{
            return 'img/publicProfile.png'
        }
    }
    const handleFileSelected=(e)=>{

         const reader = new FileReader()
         reader.onload=(e)=>{
             settwitteImgPath(e.target.result)
 
         }
         reader.readAsDataURL(e.target.files[0])
 
         const formData = new FormData ; 
         formData.append( "image",e.target.files[0])
         formData.append("text",inputTwitte)
        console.log(formData);
        setFormDataTwitte(formData)

       
    }
    
    return (
        <div className="do-tweet">
        <img className="profileUserNewTwitte" src={getImage()}/>
        <textarea contentEditable 
            onChange={(e)=> setInputTwitte(e.target.value)}
            value={inputTwitte}
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
                addNewTweet(FormDataTwitte , (isOk, message)=>{
                    if(isOk){
                        getAllTweets()
                        alert(message)
                    }else{
                        alert(message)
                    }

                })
                setInputTwitte('')
                settwitteImgPath()

            }}>
                    توییت
            </button>
        </div>

    </div>
    );
};

export default NewTweete;