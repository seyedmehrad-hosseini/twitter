import React from 'react';
import { FaHeart,FaRetweet} from "react-icons/fa";




const TwittesList = ({sender , text , likes}) => {
    const renderText =(text) =>{
        const a = text.replaceAll( /#\S+/g , `<a href=$& style="color : #5ea9dd">$&</a>`)

        return {__html :a}


    }
    return (
        <div className='new-twitte'>
                <img src={sender.img_addres} />
                <div className='name-username-twitte'>
                    <span className='name'>{sender.name}</span>
                    <span className='username'>{sender.username}</span>
                    <span className='twitte' dangerouslySetInnerHTML={renderText(text)}>
            
                    </span>
                    <div className='reTwitte-likes'>
                        <span className='like-number'>{likes}</span>
                        <span className='like-icon'>
                            <FaHeart />
                        </span>
                        <span className='reTwitte'>
                            <FaRetweet />
                        </span>

                    </div>
                </div>
            
        </div>
    );
};
export default TwittesList;