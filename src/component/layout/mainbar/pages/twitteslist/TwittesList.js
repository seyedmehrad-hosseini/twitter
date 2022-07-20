import React from 'react';
import { FaHeart,FaRetweet} from "react-icons/fa";
import { useReTwitte } from '../../../../../context/context';




const TwittesList = ({user , text , likes , image}) => {

    const {sendTextToTwitte} = useReTwitte()
    const renderText =(text) =>{
        const a = text.replaceAll( /#\S+/g , `<a href=$& style="color : #5ea9dd">$&</a>`)

        return {__html :a}


    }
    const getImage =()=>{
        if(user.image) {
           return user.image
        }
        else {
            return'/img/publicProfile.png'
        }
    }
    return (
        <div className='new-twitte'>
                <img className='newTwittesProfile' src={getImage()} />
                <div className='name-username-twitte'>
                    <span className='name'>{user.name}</span>
                    <span className='username'>{user.username}</span>
                    <span className='twitte' dangerouslySetInnerHTML={renderText(text)}>
            
                    </span>
                    {image && 
                            <div className='twitteImg'>
                                <img src={image} />
                            </div>}
                    <div className='reTwitte-likes'>
                        <span className='like-number'>{likes}</span>
                        <span className='like-icon'>
                            <FaHeart />
                        </span>
                        <span className='reTwitte' onClick={()=>sendTextToTwitte(text)}>
                            <FaRetweet />
                        </span>

                    </div>
                </div>
            
        </div>
    );
};
export default TwittesList;